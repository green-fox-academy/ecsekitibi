'use strict'


function isItACard(testCard) {
  let regExp = /^([2-9]|[TJQKA])([CDHS])$/;
  return regExp.test(testCard);
}

module.exports = {
  isItACard
};