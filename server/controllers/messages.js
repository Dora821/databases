var models = require('../models');
var express = require('express');
// module.exports = {
//   get: function (req, res) {
//
//   }, // a function which handles a get request for all messages
//   post: function (req, res) {}, // a function which handles posting a message to the database
// };

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, data) => {
      if (err) {
        console.log('controller error');
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },
  post: function (req, res) {
    console.log('req', req.body);
    models.messages.create(req.body);
    res.send('success!!!!');
  },
};
