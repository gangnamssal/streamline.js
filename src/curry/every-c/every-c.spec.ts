import go from '../../strict/go/go';
import everyC from './every-c';

describe('every-c', () => {
  it('should return true if all elements in the array pass the predicate', () => {
    const isEven = (n: number) => n % 2 === 0;
    const everyIsEven = everyC(isEven);

    expect(everyIsEven([2, 4, 6, 8])).toBe(true);
  });

  it('should return false if any element in the array fails the predicate', () => {
    const isEven = (n: number) => n % 2 === 0;
    const everyIsEven = everyC(isEven);

    expect(everyIsEven([2, 4, 6, 7])).toBe(false);
  });

  it('everyC with go', () => {
    const arr = [1, 2, 3, 4, 5];
    const isEven = (n: number) => n % 2 === 0;

    const everyIsEven = go(arr, everyC(isEven));

    expect(everyIsEven).toBe(false);
  });
});
