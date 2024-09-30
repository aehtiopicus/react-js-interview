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

  

  return sum;
};
