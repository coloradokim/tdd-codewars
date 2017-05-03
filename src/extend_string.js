let extendString = (str) => {
  let resultsString = '';
  arr = str.split('')
  for (var i = 0; i < arr.length; i++) {
    resultsString += arr[i]
  }
  //capitalize the letter
  //repeat the letter n+1 times
  //add a dash between each set of repeatedletters

  return resultsString;
}

module.exports = extendString;
