const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS Questions (
      questionID INTEGER NOT NULL AUTO_INCREMENT,
      userID INTEGER NOT NULL,
      title VARCHAR(255) NULL DEFAULT NULL,
      community CHAR(50) NULL DEFAULT 'all',
      question MEDIUMTEXT NOT NULL,
      needStamp TINYINT(2) NULL DEFAULT 0,
      needDetail TINYINT(2) NULL DEFAULT 0,
      voteCount INTEGER NULL DEFAULT 0,
      PRIMARY KEY (questionID)
    );`)
    .then(() => db.queryAsync(`
        CREATE TABLE IF NOT EXISTS Answers (
          answerID INTEGER NOT NULL AUTO_INCREMENT,
          userID VARCHAR(255) NOT NULL,
          category CHAR(30) NULL DEFAULT NULL,
          answer MEDIUMTEXT NOT NULL,
          questionID INTEGER NOT NULL,
          PRIMARY KEY (answerID)
        );
      `))
    .then(() => db.queryAsync(`
        CREATE TABLE IF NOT EXISTS Users (
          userID INTEGER NOT NULL AUTO_INCREMENT,
          username VARCHAR(255) NOT NULL,
          peLicensed TINYINT(2) NULL DEFAULT 0,
          seLicensed TINYINT(2) NULL DEFAULT 0,
          thumbnailUrl VARCHAR(255) NULL DEFAULT NULL,
          PRIMARY KEY (userID)
        );
      `))
    .then(() => db.queryAsync(`
        CREATE TABLE IF NOT EXISTS Photos (
          photoID INTEGER(255) NOT NULL AUTO_INCREMENT,
          url VARCHAR(255) NOT NULL DEFAULT 'NULL',
          thumbnailUrl VARCHAR(255) NULL DEFAULT NULL,
          styleID INTEGER NULL DEFAULT NULL,
          PRIMARY KEY (photoID)
        );
      `))
    .then(() => db.queryAsync(`
        CREATE TABLE IF NOT EXISTS Related (
          id INTEGER NOT NULL,
          questionID1 INTEGER NOT NULL,
          questionID2 INTEGER NOT NULL,
          PRIMARY KEY (id)
        );
      `))
    .then(() => db.queryAsync(`
        SET FOREIGN_KEY_CHECKS=0;
    `))
    .catch((err) => console.log(err));
};
