const db = require('../db');

module.exports = {
  get: (callback) => {
    db.queryAsync('SELECT * FROM Questions')
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  },

  post: (args, callback) => {
    db.queryAsync('INSERT INTO Questions (username, category, question, needStamp, needDetail) VALUES (?,?,?,?,?)', ['humbugger', ...args])
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  },

  getStyle: (args, callback) => {
    db.queryAsync('SELECT styleID, name, originalPrice, salePrice FROM Styles WHERE productID=?', args)
      .then((data) => callback(null, data[0][0]))
      .catch((err) => callback(err));
  },

};
