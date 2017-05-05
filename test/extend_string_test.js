var chai = require('chai');
var assert = chai.assert;
var extendString = require('../src/extend_string');

describe ('extends a string', function() {
  it('multiplies the letter of a string by the index number', function() {
    assert.equal(extendString('abcd'), 'A-Bb-Ccc-Dddd');
    assert.equal(extendString('RqaEzty'), 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    assert.equal(extendString('cwAt'), 'C-Ww-Aaa-Tttt');
    assert.equal(extendString('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc')
    assert.equal(extendString('lkmm'), 'L-Kk-Mmm-Mmmm');
  });
});
