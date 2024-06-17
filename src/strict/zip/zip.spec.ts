import { zip } from '..';

describe('zip', () => {
  it('zip', () => {
    const res = zip([1, 2, 3], ['a', 'b', 'c']);
    expect(res).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });

  it('zip with different lengths', () => {
    const res = zip([1, 2, 3], ['a', 'b']);
    expect(res).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('zip with different lengths', () => {
    const res = zip([1, 2], ['a', 'b', 'c']);
    expect(res).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('zip with zero length', () => {
    const res = zip([], []);
    expect(res).toEqual([]);
  });
});
