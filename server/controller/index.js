const model = require('../model/index.js');

module.exports = {
  post: (req, res) => {
    const args = req.body;
    model.post(args, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log('post success!');
      res.send();
    })
  },

  get: (req, res) => {
    const args = req.body;
    model.get((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log('get success!');
      res.send(data);
    })
  },

}