let chai = require('chai');
let assert = chai.assert;
let determineIfDouble = require('../src/tricky_double');

describe('', function() {
  it('Returns twice the supplied value unless it is a tricky double.', function() {
    assert.equal(determineIfDouble(15), 30);
    assert.equal(determineIfDouble(100), 200);
    assert.equal(determineIfDouble(4343), 4343);
  });
});
