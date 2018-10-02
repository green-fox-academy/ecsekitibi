const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/yondu', (req, res) => {
  let speed = req.query.distance / req.query.time;
  if (req.query.distance && req.query.time) {
    res.status(200).json({
      distance: req.query.distance,
      time: req.query.time,
      speed: speed,
    }).send()
  } else {
    res.status(400).json({
      error: "I may be as pretty as an angel, but I sure as hell ain't one. Hand it over, son"
    }).send()
  }
})

module.exports = { app };