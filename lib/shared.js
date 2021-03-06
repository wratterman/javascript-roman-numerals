function arabicToRoman(romanNumerals, number) {
  if (number <= 0 || number > 3000) {
    return null;
  }
  let fullRoman = "";
  for (let hashKey in romanNumerals) {
    let arabicNumeral = romanNumerals[hashKey]
    let toRepeat = Math.floor(number / arabicNumeral);
    fullRoman += hashKey.repeat(toRepeat);
    number -= arabicNumeral * toRepeat;
  }
  return fullRoman;
};

module.exports = { arabicToRoman: arabicToRoman }
