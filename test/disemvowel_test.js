var chai = require('chai');
var assert = chai.assert;
var removeVowels = require('../src/disemvowel');

describe('removes vowels', function(){
  it ('removes vowels from a string and returns a string of the remaining characters and spaces', function(){
    assert.equal(removeVowels("This website is for losers LOL!"),"Ths wbst s fr lsrs LL!");
    assert.equal(removeVowels("Today is the day."),"Tdy s th dy.");
  });
});
