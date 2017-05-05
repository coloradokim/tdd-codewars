let extendString = (str) => {
  let resultsString = '';
  arr = str.toLowerCase().split('');

  for (var i = 0; i < arr.length; i++) {
    resultsString += arr[i].toUpperCase() + arr[i].repeat(i) + '-';
  }
  return resultsString.slice(0, resultsString.length - 1)
};

module.exports = extendString;
