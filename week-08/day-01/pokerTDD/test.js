'use strict'

const tape = require('tape');
const businessLogic = require('./poker-tellWhosWon');
const cards = require('./cards');
const five = require('./isItFive');

tape.test('one plus one equals two', t => {
  t.equal(2, businessLogic.addTwoNumbers(1, 1));
  t.end();
});

tape.test('one plus one plus one equals three', t => {
  t.equal(3, businessLogic.addThreeNumbers(1, 1, 1));
  t.end();
});

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

tape.test('It has five card in the hand', t => {
  let hand = ['2C', 'TH', 'QS', '9D', 'JC']
  t.ok(five.isItFive(hand), 'You have five cards in your hand');
  t.end();
})

tape.test('It has five card in the hand', t => {
  let hand = ['2C', 'TH', 'QS', 'JC']
  t.notOk(five.isItFive(hand), 'You dont have five cards in your hand');
  t.end();
})
