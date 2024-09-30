import { getIntegerForRoman } from "./roman-number.utils";
import { isRomanNumberValid } from "./roman-nums-validation.utils";

/**
 * This function gets as argument a roman number string for instance
 * XX -> 20
 * XIX -> 19
 * V -> 5
 * VIII -> 8
 * HI -> 0 -- invalid
 * @param romanNumber 
 * @returns integer value of roman number or 0 if its invalid
 */
export const romanToInt = (romanNumber: string): number => {
  let sum = 0;
  if (!isRomanNumberValid(romanNumber)) {
    return sum;
  }

  for (let i = 0; i < romanNumber.length; i++) {
    const next = getIntegerForRoman(romanNumber[i + 1]);
    const current = getIntegerForRoman(romanNumber[i]) || 0;
    if (!next || current >= next) {
      sum = sum + current;
    } else {
      sum = sum + next - current;
      i++;
    }
  }

  return sum;
};
