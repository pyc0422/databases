var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM messages', function(err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }

      });
    });
  }, // a function which produces all the messages
  create: function ({username, message, roomname}) {
    return new Promise ((resolve, reject) => {
      db.connection.query('INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)', [username, message, roomname], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } // a function which can be used to insert a message into the database
};
