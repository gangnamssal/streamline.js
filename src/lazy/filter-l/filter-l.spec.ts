import filterL from './filter-l';

describe('filterL', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = [...filterL(a => a > 1, arr)];

    expect(result).toEqual([2, 3]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = [...filterL(a => a > 1, set)];

    expect(result).toEqual([2, 3]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = [...filterL(([k, v]) => v > 1, mapObject)];

    expect(result).toEqual([
      ['b', 2],
      ['c', 3],
    ]);
  });
});
