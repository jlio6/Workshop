const express = require('express');
// const data = require('../database/index.js');
// const controller = require('./controller/controller.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

// app.post('/thread', controller.post);

// app.get('/thread', controller.get);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
