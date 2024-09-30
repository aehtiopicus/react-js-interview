import { describe, expect, it } from '@jest/globals';
import { isRomanNumberValid } from './roman-nums-validation.utils';

describe('Roman numbers test', () => {

  it('XX is valid', () => {
    expect(isRomanNumberValid('XX')).toBeTruthy()
  });

  it('XAX is invalid valid', () => {
    expect(isRomanNumberValid('XAX')).toBeFalsy()
  });

  it('VXX is invalid valid', () => {
    expect(isRomanNumberValid('IXX')).toBeFalsy()
  });
});