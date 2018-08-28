const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/dbAPI');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/tasks', (req, res) => {
  console.log('inside tasks yo');
  db.getAll((results) => {
      res.send(results);
  })
})

app.listen(port, () => {
  console.log(`server running at:${port}`);
});

module.exports = {
  app,
};