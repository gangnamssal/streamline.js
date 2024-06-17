import { go } from '../../strict';
import zipC from './zip-c';

describe('zip-c', () => {
  it('should zip two iterables', () => {
    const iter1 = [1, 2, 3];
    const iter2 = ['a', 'b', 'c'];
    const result = zipC(iter1, iter2);
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });

  it('should zip two iterables with different lengths', () => {
    const iter1 = [1, 2, 3];
    const iter2 = ['a', 'b'];
    const result = zipC(iter1)(iter2);
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('zipC with go', () => {
    const iter1 = [1, 2, 3];
    const iter2 = ['a', 'b', 'c'];
    const result = go(iter2, zipC(iter1));
    expect(result).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });
});
