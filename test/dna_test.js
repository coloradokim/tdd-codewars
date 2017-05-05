const chai = require('chai');
const assert = chai.assert;
const findComplement = require('../src/dna')

describe('Transcribes DNA strands', function() {
  it('returns a transcribed a DNA strand', function() {
    assert.equal(findComplement('AAAA'), 'TTTT');
    assert.equal(findComplement('ATTGC'), 'TAACG');
    assert.equal(findComplement('GTAT'), 'CATA');
  });
});
