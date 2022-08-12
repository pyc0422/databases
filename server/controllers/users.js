var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((data) => {
      res.send(JSON.stringify(data));
    });


  },
  post: function (req, res) {
    console.log('controllers users: ', req.body);
    models.users.create(req.body, (data) => {
      res.send(JSON.stringify(data));
    });
  }
};
