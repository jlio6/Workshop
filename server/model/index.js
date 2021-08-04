const db = require('../db');

module.exports = {
  get: (callback) => {
    db.queryAsync('SELECT * FROM Questions INNER JOIN Users ON Questions.userID = Users.userID ORDER BY questionID DESC')
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  },

  post: (args, callback) => {
    db.queryAsync('INSERT INTO Questions (userID, title, question, needStamp, needDetail, community) VALUES (?,?,?,?,?,?)', [1, ...args])
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  },

  putVote: (args, callback) => {
    db.queryAsync('UPDATE LOW_PRIORITY Questions SET voteCount=(?) WHERE questionID=(?)', [args[0], args[1]])
      .then((data) => callback(null, data[0]))
      .catch((err) => callback(err));
  },

};

 // getStyle: (args, callback) => {
  //   db.queryAsync('SELECT styleID, name, originalPrice, salePrice FROM Styles WHERE productID=?', args)
  //     .then((data) => callback(null, data[0][0]))
  //     .catch((err) => callback(err));
  // },