const express = require('express');
const path = require('path');
const db = require('./db/index.js');
const controller = require('./controller/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

app.post('/thread', controller.post);

app.get('/thread', controller.get);

app.get('/*', (req, res) => {
  const pathName = path.join(__dirname, '..', 'client', 'dist', 'index.html');
  res.sendFile(pathName);
});


const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
