const chai = require('chai');
const assert = chai.assert;
const string_repeat = require('../src/string_repeat.js');

describe ('string repeat', function (){
  it('repeats the given string n times', function () {
    assert.equal(repeatStr(3, '*'), '***');
    assert.equal(repeatStr(5, '#'), '#####');
    assert.equal(repeatStr(2, 'ha '), 'ha ha ');
  });
});
