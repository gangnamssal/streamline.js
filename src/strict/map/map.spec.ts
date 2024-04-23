import map from './map';

describe('map', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = map((a: number) => a + 1, arr);

    expect(result).toEqual([2, 3, 4]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = map((a: number) => a + 1, set);

    expect(result).toEqual([2, 3, 4]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = map(([k, v]: [string, number]) => [k, v + 1], mapObject);

    expect(result).toEqual([
      ['a', 2],
      ['b', 3],
      ['c', 4],
    ]);
  });
});
