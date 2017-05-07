let chai = require('chai');
let assert = chai.assert;
let decodeMorse = require('../src/morse_code');

describe('Decode Morse Code', () => {
  it('translates a string of morse code', () => {
    assert.equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
  })
})
