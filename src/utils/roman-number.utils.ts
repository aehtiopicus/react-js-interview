
/**
 * Conversion between roman and decimal numbers
 */
export const romanNumberMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

type RomanNumbersType = keyof typeof romanNumberMap;

/**
 * Type guard to check if keyValue is a single roman number
 */
export const isValidKey = (keyValue: unknown): keyValue is RomanNumbersType => {
  return !!keyValue && typeof keyValue === 'string' && keyValue in romanNumberMap;
};

/**
 * Find equivalence between possible roman number. If romanString is not a roman number then returns 0 otherwise 
 * return the integer equivalent.
 * @param romanString possible roman number
 * @returns integer 0 means not match
 */

export const getIntegerForRoman = (romanString?: string): number | undefined => {
  if (isValidKey(romanString)) {
    return romanNumberMap[romanString]
  }
  return 0;
}
