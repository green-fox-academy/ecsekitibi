const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/rocket', (req, res) => {
  let actualCargo = { "caliber25": 0, "caliber30": 0, "caliber50": 0, "shipstatus": "empty", "ready": false }
  res.status(200).json(actualCargo).send()
})

app.get('/rocket/fill', (req, res) => {
  if (req.query.caliber && req.query.amount) {
    if (req.query.caliber === '.50') {
      actualCargo.caliber50 === req.query.amount;
    } else if (req.query.caliber === '.30') {
      actualCargo.caliber30 === req.query.amount;
    } else if (req.query.caliber === '.25') {
      actualCargo.caliber25 === req.query.amount;
    }



    let actualAmmo = Number(actualCargo.caliber25) + Number(actualCargo.caliber30) + Number(actualCargo.caliber50);
    let shipStatus = actualAmmo / 12500 * 100;

    if (shipStatus === 0) {
      actualCargo.shipstatus = 'empty';
    } else if (shipStatus < 100) {
      actualCargo.shipstatus = `${shipStatus}%`;
    } else if (shipStatus = 100) {
      actualCargo.shipstatus = 'full';
    } else if (shipStatus > 100) {
      altualCargo.shipstatus = 'overloaded';
    }

    res.status(200).json({
      received: req.query.caliber,
      amount: req.query.amount,
      shipstatus: actualCargo.shipstatus,
      ready: actualCargo.ready
    }).send();
  } else {
    res.status(400).json({ error: "no ammunition provided" }).send();
  }
});

module.exports = { app };