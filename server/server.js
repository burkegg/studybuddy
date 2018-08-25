const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const db = require('../database/dbAPI');

const app = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));

// app.get('/locations/:locID/reviews', (req, res) => {
//   const { locID } = req.params;
//   db.getById(locID, (err, results) => {
//     if (err) {
//       console.log('error in server.js inside app.get', err);
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   });
// });


app.listen(port, () => {
  console.log(`server running at:${port}`);
});

module.exports = {
  app,
};