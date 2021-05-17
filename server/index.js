const express = require('express');
const data = require('../database/index.js');
const controller = require('./controller/controller.js');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/thread', controller.post);

app.get('/thread', controller.get);

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

