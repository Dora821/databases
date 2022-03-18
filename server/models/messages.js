// var connection = require('../db/index.js');
var connection = require('../db');

/*
  SELECT messages.message, messages.roomname, users.username
  FROM messages, users
  WHERE messages.user_id = users.id;
*/

module.exports = {
  getAll: function (callback) {
    var queryString =
      'SELECT messages.message, messages.roomname, users.username FROM (messages, users) WHERE messages.user_id = users.id;';
    // var queryString = 'SELECT * FROM messages;';
    connection.query(queryString, (err, data) => {
      if (err) {
        console.log('getAll error\n');
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (obj) {
    const queryArgs = [obj.message, obj.roomname, obj.username];
    const queryString =
      'INSERT INTO messages (message, roomname, user_id) VALUES (?, ?, (SELECT users.id FROM users WHERE users.username = ?));';
    connection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        console.log('create error\n');
      } else {
        console.log('success of posting!\n');
      }
    });
  }, // a function which can be used to insert a message into the database
};
