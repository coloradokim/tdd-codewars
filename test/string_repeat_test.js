var chai = require('chai');
var assert = chai.assert;
var repeatString = require('../src/string_repeat');


describe ('string repeat:', function () {
  it('repeats the given string n times', function () {
    assert.equal(repeatString(3, '*'), '***', 'WTF');
    assert.equal(repeatString(5, '#'), '#####');
    assert.equal(repeatString(2, 'ha '), 'ha ha ');
  });
});
