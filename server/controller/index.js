const model = require('../model/index.js');

module.exports = {
  post: (req, res) => {
    const args = req.body;
    console.log('req body is ', req.body);
    // model.post(args, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   }
      res.send();
    // })
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