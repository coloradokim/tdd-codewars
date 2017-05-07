let determineIfDouble = (num) => {
  let stringyNum = num.toString();
  let lengthOfHalf = stringyNum.length / 2;
  let firstHalf = stringyNum.slice(0, lengthOfHalf);
  let secondHalf = stringyNum.slice(lengthOfHalf);

  return (firstHalf == secondHalf) ? num : num * 2;

};

module.exports = determineIfDouble;
