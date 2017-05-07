MORSE_CODE_ALPHABET = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};


let decodeMorse = (string) => {
  //two spaces is the end of a letter
  //three spaces is the end of a word 

  let morseCode = string.split('  ');
  let translatedCode = '';

  for (var i = 0; i < morseCode.length; i++) {
    if (morseCode[i] === '') {
      translatedCode += ''
    } else {
      translatedCode += MORSE_CODE_ALPHABET[morseCode[i]];
    }
  }
  return translatedCode;
};

module.exports = decodeMorse;
