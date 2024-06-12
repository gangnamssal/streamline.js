import { go } from '../../strict';
import chunkC from './chunk-c';

describe('chunkC', () => {
  it('should chunk the given iterable', () => {
    const res = chunkC(2)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const res2 = chunkC(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(res).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
    expect(res2).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it('should return empty iterable if the given iterable is empty', () => {
    const res = chunkC(2)([]);
    expect(res).toEqual([]);
  });

  it('should return empty iterable if the given size is 0', () => {
    const res = chunkC(0)([1, 2, 3]);
    expect(res).toEqual([]);
  });

  it('chunk with go', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const res = go(arr, chunkC(2));

    expect(res).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });
});
