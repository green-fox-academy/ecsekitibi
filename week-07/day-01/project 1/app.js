'use strict'
const express = require('express');
const app = express();
let PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.json({
      "received": req.query.input,
      "result": 2 * req.query.input
    })
  } else {
    res.json({
      "error": "Please provide an input!"
    });

  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) {
    res.json({
      "error": "Please provide a name!"
    });
  } else if (!req.query.title) {
    res.json({
      "error": "Please provide a title!"
    })
  }
});

app.get('/appenda/:appendable', (req, res) => {

  if (req.params.appendable) {
    res.json({
      "appended": req.params.appendable + "a"
    })
  } else {
    res.statusCode(404).json
  }
});

function addUntil(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total = i + total
  }
  return total;
}

function factorUntil(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = i * fact;
  }
  return fact;
}
app.post('/dountil/:action', jsonParser, (req, res) => {
  if (req.params.action === "sum") {
    res.json({
      "result": addUntil(req.body.until)
    })
  } else if (req.params.action === "factor") {
    res.json({
      "result": factorUntil(req.body.until)
    })
  } else {
    res.json({
      "error": "Please provide a number!"
    })
  }
})

function sumNumbers(numberArray) {
  let total = 0;
  numberArray.forEach(element => {
    total += element
  });
  return total;
}

function multiplyNumbers(numberArray) {
  let total = 1;
  numberArray.forEach(element => {
    total *= element;
  });
  return total;
}

function doubleNumbers(numberArray) {
  let doubleArray = [];
  doubleArray = numberArray.map(elem => {
    return elem * 2;
  })
  return doubleArray;
}


app.post('/array', jsonParser, (req, res) => {
  if (req.body.what === "sum") {
    res.json({
      "result": sumNumbers(req.body.numbers)
    })
  } else if (req.body.what === "multiply") {
    res.json({
      "result": multiplyNumbers(req.body.numbers)
    })
  } else if (req.body.what === "double") {
    res.json({
      "result": doubleNumbers(req.body.numbers)
    })
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
