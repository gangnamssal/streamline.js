import go from '../../strict/go/go';
import findIndexC from './findIndex-c';

describe('findIndex-c', () => {
  it('should return the index of the first element that satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const actual = findIndexC(4, arr);
    expect(actual).toBe(3);
  });

  it('should return -1 if no element satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const actual = findIndexC(6, arr);
    expect(actual).toBe(-1);
  });

  it('should return the index of the first element that satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const actual = findIndexC(4)(arr);
    expect(actual).toBe(3);
  });

  it('findIndexC with go', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
    const result = go(arr, findIndexC({ a: 4 }));

    expect(result).toBe(3);
  });
});
