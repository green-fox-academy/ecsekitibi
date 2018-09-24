'use strict'

const tape = require('tape');
const cards = require('./cards');


tape.test('Is it a card', t => {
  let testCard = '2D';
  t.ok(cards.isItACard(testCard), 'Its a card');
  t.end();
});

tape.test('Is it a card', t => {
  let testCard = '2X';
  t.notOk(cards.isItACard(testCard), 'Its not a card');
  t.end();
});
