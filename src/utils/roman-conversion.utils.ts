import { romanNumberMap } from "./roman-number.utils";
import { isRomanNumberValid } from "./roman-nums-validation.utils";

type ROMAN_NUMBERS_KEY = "I" | "V" | "X" | "L" | "C" | "D" | "M";

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
  let lastRomanNumber = 0

  const romanNumberList = romanNumber.split("");

  for (let rn of romanNumberList) {
    sum = sum + romanNumberMap[rn as ROMAN_NUMBERS_KEY];
    if (lastRomanNumber < romanNumberMap[rn as ROMAN_NUMBERS_KEY]){
      sum += - lastRomanNumber*2
    }
    lastRomanNumber = romanNumberMap[rn as ROMAN_NUMBERS_KEY]
  }

  return sum;
};
