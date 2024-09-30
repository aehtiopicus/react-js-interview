const romanNumeralRegex = /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

export const isRomanNumberValid = (textRoman: string): boolean => {

  return romanNumeralRegex.test(textRoman);
}
