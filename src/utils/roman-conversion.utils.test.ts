import { describe, expect, it } from '@jest/globals';
import { romanToInt } from './roman-conversion.utils';

describe('Roman numbers convertion test', () => {

  it('XX is 20', () => {
    expect(romanToInt('XX')).toBe(20);
  });

  it('MCMXCIX is 1999', () => {
    expect(romanToInt('MCMXCIX')).toBe(1999);
  });

  it('DCCLXXXIV is 784', () => {
    expect(romanToInt('DCCLXXXIV')).toBe(784);
  });

  it('Invalid is 0', () => {
    expect(romanToInt('VVVVV')).toBe(0);
  });
});