import filter from './filter.ts';

describe('filter', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = filter(a => a > 1, arr);

    expect(result).toEqual([2, 3]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = filter(a => a > 1, set);

    expect(result).toEqual([2, 3]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = filter(([k, v]) => v > 1, mapObject);

    expect(result).toEqual([
      ['b', 2],
      ['c', 3],
    ]);
  });
});
