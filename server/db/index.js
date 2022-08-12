var mysql = require('mysql2');
var Sequelize = require('sequelize');
var connection = new Sequelize('chat', 'root', '', {dialect: 'mysql'});

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat'
// });
var User = connection.define('User', {
  username: Sequelize.STRING
}, {
  timestamps: false
});

var Message = connection.define('Message', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

exports.User = User;
exports.Message = Message;
exports = {
  User,
  Message,
  connection
};