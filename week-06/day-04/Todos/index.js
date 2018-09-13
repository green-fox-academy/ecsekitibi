'use strict'
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  res.render('home', {
    title: 'Home Page',
    header: 'Things to do today',
    todos,
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

