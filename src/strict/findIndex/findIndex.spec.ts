import findIndex from './findIndex';

describe('findIndex', () => {
  it('should return the index of the first element that satisfies the provided testing function', () => {
    const array = [5, 12, 8, 130, 44];
    const actual = findIndex(8, array);
    expect(actual).toBe(2);
  });

  it('should return -1 if no element satisfies the provided testing function', () => {
    const array = [5, 12, 8, 130, 44];
    const actual = findIndex(800, array);
    expect(actual).toBe(-1);
  });

  it('should return -1 if the iterable is empty', () => {
    const array: number[] = [];
    const actual = findIndex(8, array);
    expect(actual).toBe(-1);
  });

  it('should return the index of the object that satisfies the provided testing function', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const actual = findIndex({ id: 2 }, array);
    expect(actual).toBe(1);
  });

  it('should return -1 if no object satisfies the provided testing function', () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const actual = findIndex({ id: 4 }, array);
    expect(actual).toBe(-1);
  });

  it('should return the index of the string that satisfies the provided testing function', () => {
    const array = ['apple', 'banana', 'cherry'];
    const actual = findIndex('banana', array);
    expect(actual).toBe(1);
  });

  it('should return the index of the string that satisfies the provided testing function', () => {
    const string = 'banana';
    const actual = findIndex('n', string);
    expect(actual).toBe(2);
  });
});
