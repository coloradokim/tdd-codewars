let findComplement = (dnaStrand) => {
  let dna = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  };
  let newStrand = '';
  for (var i = 0; i < dnaStrand.length; i++) {
    newStrand += dna[dnaStrand[i]]
  }
  return `${newStrand}`
};

module.exports = findComplement
