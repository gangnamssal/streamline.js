import flat from './flat';
import { go } from '..';

describe('flat', () => {
  it('flattens a nested iterable', () => {
    const iter = flat([[1], [2, 3], [4, 5, 6]]);
    expect(iter).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('flattens a deeply nested iterable', () => {
    const iter = flat([[[1]], [[2], 3], [4, [5, 6]]]);
    expect(iter).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('flattens an iterable with empty iterables', () => {
    const iter = flat([[], [1], [], [2], [], [3], []]);
    expect(iter).toEqual([1, 2, 3]);
  });

  it('flattens an iterable with empty nested iterables', () => {
    const iter = flat([[], [[]], [[], []], [[], 1], [[2], []], [[], [3]], []]);
    expect(iter).toEqual([1, 2, 3]);
  });

  it('flattens an iterable with empty deeply nested iterables', () => {
    const iter = flat([[], [[]], [[], []], [[], 1], [[2], []], [[], [3]], []]);
    expect(iter).toEqual([1, 2, 3]);
  });

  it('flattens an iterable with empty deeply nested iterables', () => {
    const iter = flat([[], [[]], [[], []], [[], 1], [[2], []], [[], [3]], []]);
    expect(iter).toEqual([1, 2, 3]);
  });

  it('flattens an iterable with empty deeply nested iterables', () => {
    const iter = flat([[], [[]], [[], []], [[], 1], [[2], []], [[], [3]], []]);
    expect(iter).toEqual([1, 2, 3]);
  });

  it('flat with go', () => {
    const arr = [[1], [2, 3], [4, 5, 6]];

    const res = go(arr, flat);

    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
