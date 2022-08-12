var db = require('../db');

module.exports = {
  getAll: function (cb) {
    // return new Promise((resolve, reject) => {
    //   db.connection.query('SELECT * FROM users', function(err, results) {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve(results);
    //     }
    //   });
    // });
    db.User.sync()
      .then(() => {
        return db.User.findAll();
      })
      .then((data) => {
        cb(data);
      });
  },
  create: function ({username}, cb) {
    console.log('username in models: ', username);
    db.User.sync()
      .then(() => {
        return db.User.create({username});
      })
      .then((data) => {
        cb(data);
      });
    // return new Promise ((resolve, reject) => {
    //   db.connection.query('INSERT INTO users (username) VALUES (?)', [username], function(err) {
    //     if (err) {
    //       reject(err);
    //     } else {
    //       resolve();
    //     }
    //   });
    // });

  }
};
