const {connection} = require('./connection');

module.exports = {
  getAllMovies: function (callback) {
    connection.query('SELECT * FROM movies', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
};