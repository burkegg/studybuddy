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
    }
  });
}

const deleteOne = function deleteTask (params, callback) {
  db.query(`delete from tasks where id = (?)`, params, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(201);
    }
  })
}

module.exports = { getAll, postOne, deleteOne };
