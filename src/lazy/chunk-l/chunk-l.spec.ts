import { chunkL } from '..';

describe('chunkL', () => {
  it('should chunk the given iterable', () => {
    const iter = chunkL(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect([...iter]).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('should return empty iterable if the given iterable is empty', () => {
    const iter = chunkL(2, []);
    expect([...iter]).toEqual([]);
  });

  it('should return empty iterable if the given size is 0', () => {
    const iter = chunkL(0, [1, 2, 3]);
    expect([...iter]).toEqual([]);
  });
});
