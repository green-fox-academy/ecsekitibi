'use strict'
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/products/:id', (req, res) => {
  console.log(req.query);
  res.render('home', {
    title: 'Product page',
    header: req.params.id,
    withGoodbye: req.query.withGoodbye === true,
  })
});

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home page',
    header: 'Green Fox Academy',
  })
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});