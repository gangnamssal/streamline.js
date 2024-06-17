import go from '../../strict/go/go';
import findC from './find-c';

describe('findC', () => {
  it('should return the first element that satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (x: number) => x % 2 === 0;
    const result = findC(isEven, arr);
    expect(result).toBe(2);
  });
  it('should return the first element that satisfies the predicate', () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (x: number) => x % 2 === 0;
    const result = findC(isEven)(arr);
    expect(result).toBe(2);
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const arr = [1, 3, 5, 7];
    const isEven = (x: number) => x % 2 === 0;
    const result = findC(isEven, arr);
    expect(result).toBeUndefined();
  });

  it('findC with go', () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (x: number) => x % 2 === 0;
    const result = go<number>(arr, findC(isEven));
    expect(result).toBe(2);
  });
});
