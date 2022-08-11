var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM users', function(err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  create: function ({username}) {
    console.log('username in models: ', username);
    return new Promise ((resolve, reject) => {
      db.connection.query('INSERT INTO users (username) VALUES (?)', [username], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

  }
};
