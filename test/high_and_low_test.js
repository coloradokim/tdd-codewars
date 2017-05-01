var chai = require('chai');
var assert = chai.assert;
var findHighandLow = require('../src/high_and_low');

describe('find high and low', function () {
  it('returns the largest and smallest numbers from a string of numbers', function () {
    assert.equal(findHighandLow("1 2 3 4 5"), "5 1");
    assert.equal(findHighandLow("1 2 -3 4 5"), "5 -3");
    assert.equal(findHighandLow("1 -1"), "1 -1");
    assert.equal(findHighandLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
  });
});
