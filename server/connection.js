var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'movieDB'
});

module.exports = {
  connection
};