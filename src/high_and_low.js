let findHighandLow = (stringOfNumbers) => {
    let arr = [];
    let result = {};
    stringOfNumbers = stringOfNumbers.split(" ");

    stringOfNumbers.forEach((string) => {
        arr.push(parseInt(string))
      });
      
      result.high = Math.max(...arr)
      result.low = Math.min(...arr)
      return `${result.high} ${result.low}`;
    }

    module.exports = findHighandLow;
