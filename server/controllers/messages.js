var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((data) => {
      res.send(JSON.stringify(data));
    });
    // res.writeHead(200, {'Content-Type': 'application/json' });
    // res.end(JSON.stringify(data));

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('controllers message: ', req.body);
    models.messages.create(req.body, (data)=> {
      res.send(data);
    });

  } // a function which handles posting a message to the database
};
