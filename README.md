# Interview exercise #

## Requirement ##

This is a basic application related to roman numbers. The overall application flow should be the following:
* The user assemble a roman number using the provided UI.
* The system validates the number an indicates if the number is ok or not.
* The user add the number to the current Roman to Integer table.

### The exercise will be split in two sections.

1. Implement a function to calculate the integer equivalence of a valid roman number. `(30 min)`
2. Implement missing UI components to full fill the application requirement. `(30 min)`.


### Equivalence calculation

There is an already provided function called `romanToIn` which should be implemented:


```/**
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
  if (!isRomanNumberValid(romanNumber)) {
    return 0;
  }
  return 0;
}
```

* File location: `src/utils/roman-conversion.utils.ts`
* How to test it: `yarn test`
* Note that: `isRomanNumberValid` is already provided and will check that the roman number is valid.


### UI Features

The main goal here is to provide a way to:
* visualize the number which is being builded before validate it.
* validate the number before adding to the current number equivalence.
* a valid number might be added to the list.
* at any time the user can clean the current roman number.
* the number list should provide a way to delete current equivalence


For this point we provide a resource mocking an API, and it is expected to be consumed for this challenge.

```
const numbers: Map<number, string> = new Map();

/**
 * Add a number to list of numbers
 */
export const postNumber = async (nextNum: number, rNumber: string) => {
  if (numbers.has(nextNum)) {
    throw Error('Already there');
  }
  return {
    status: 'ok',
  };
};

export const getNumbers = async () => {
  const numsObject: {intNum: number, romNum: string}[] = [];
  numbers.forEach((romNum,intNum) => {
    numsObject.push({
      intNum,
      romNum
    })
  })
  return numsObject
};

export const removeNumber = async (nextNum: number) => {

  if (!numbers.has(nextNum)) {
    throw Error('This is not the number you are looking for');
  }
  numbers.delete(nextNum);
  return {
    status: 'ok',
  };
};
```

File location: `src/api/number.service.ts`

