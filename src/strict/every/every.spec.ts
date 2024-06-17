import every from './every';

describe('every', () => {
  it('should return true if all elements in the array pass the test implemented by the provided function', () => {
    const array = [1, 2, 3, 4, 5];
    const result = every((element: number) => element % 2 !== 0, array);
    expect(result).toEqual(false);
  });

  it('should return false if at least one element in the array does not pass the test implemented by the provided function', () => {
    const array = [1, 2, 3, 4, 5];
    const result = every((element: number) => element <= 5, array);
    expect(result).toEqual(true);
  });

  it('should return true if the array is empty', () => {
    const array: never[] = [];
    const result = every((element: never) => element % 2 === 0, array);
    expect(result).toEqual(true);
  });
});
