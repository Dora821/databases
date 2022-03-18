var connection = require('../db');

module.exports = {
  getAll: function (callback) {
    connection.query('SELECT * FROM users', (err, data) => {
      if (err) {
        console.log('getAll error\n');
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (obj) {
    const queryArgs = [obj.username];
    const queryString = 'INSERT INTO users (username) VALUES (?)';
    connection.query(queryString, queryArgs, (err, data) => {
      if (err) {
        console.log('create error\n');
      } else {
        console.log('success of posting!\n');
      }
    });
  },
};
