var models = require('../models');

module.exports = {
  get: function (req, res) {
    var promise = models.messages.getAll();
    promise.then((data) => {
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
    // .catch((err) => {
    //   console.error(err);
    // });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var promise = models.messages.create(req.body);
    promise.then(() => {
      res.writeHead(200, {'Content-Type': 'application/json' });
      res.end();
    });
  } // a function which handles posting a message to the database
};
