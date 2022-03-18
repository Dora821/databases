var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        console.log('controller error');
      } else {
        res.send(JSON.stringify(data));
      }
    });
  },
  post: function (req, res) {
    console.log('req', req.body);
    models.users.create(req.body);
    res.send('success!!!!');
  },
};
