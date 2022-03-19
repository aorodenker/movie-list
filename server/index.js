var mysql = require('mysql2');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const models = require('./models');


app.use(express.static('client/dist'));


app.get('/api/movies', (req, res) => {
  models.getAllMovies((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
