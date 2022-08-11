var models = require('../models');

module.exports = {
  get: function (req, res) {
    var promise = models.users.getAll();
    promise.then((data) => {
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  },
  post: function (req, res) {
    console.log('controllers users: ', req.body);
    var promise = models.users.create(req.body);
    promise.then(() => {
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.end();
    });
  }
};
