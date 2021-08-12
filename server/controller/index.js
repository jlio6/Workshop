const model = require('../model/index.js');

module.exports = {
  post: (req, res) => {
    const args = Object.values(req.body);
    model.post(args, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log('data is ', data);
      res.send();
    });
  },

  get: (req, res) => {
    const args = req.body;
    model.get((err, data) => {
      if (err) {
        console.log(err);
      }
      // console.log('get success! here\'s data ', data);
      res.send(data);
    })
  },

  putVote: (req, res) => {
    const args = [req.body.data, Number(req.params.postId)];
    model.putVote(args, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(data);
    })
  },

}