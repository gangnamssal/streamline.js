import some from './some';

describe('some', () => {
  it('should return true if some elements in the array pass the test implemented by the provided function', () => {
    const array = [1, 2, 3, 4, 5];
    const result = some(element => element % 2 === 0, array);
    expect(result).toEqual(true);
  });

  it('should return false if no elements in the array pass the test implemented by the provided function', () => {
    const array = [1, 3, 5];
    const result = some(element => element % 2 === 0, array);
    expect(result).toEqual(false);
  });

  it('should return false if the array is empty', () => {
    const array: number[] = [];
    const result = some(element => element % 2 === 0, array);
    expect(result).toEqual(false);
  });

  it('should return true if string contains a vowel', () => {
    const string = 'hello';
    const result = some(character => 'aeiou'.includes(character), string);
    expect(result).toEqual(true);
  });

  it('should return false if string does not contain a vowel', () => {
    const string = 'hll';
    const result = some(character => 'aeiou'.includes(character), string);
    expect(result).toEqual(false);
  });

  it('should return true if object contains a value greater than 10', () => {
    const object = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
    const result = some(({ value }) => value > 10, object);
    expect(result).toEqual(false);
  });
});
