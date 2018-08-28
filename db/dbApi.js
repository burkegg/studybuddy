const path = require('path');
const db = require(path.join(__dirname, 'index'));

const getAll = function getAllTasks (callback) {
  db.query(`select * from tasks`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
};

const postOne = function postTask (params) {
  db.query(`insert into tasks (text, difficulty) VALUES (?, ?)`,params, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(201)
    }
  });
}

// postOne(['adsfasfd', 3], ()=>{console.log('posted')});
// getAll((asdf)=>{console.log(asdf)});
module.exports = { getAll, postOne };
