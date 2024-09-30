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
