import mapL from './map-l';

describe('map-l', () => {
  it('배열', () => {
    const arr = [1, 2, 3];
    const fn = (a: number) => a + 1;

    const res = mapL(fn, arr);

    expect([...res]).toEqual([2, 3, 4]);
  });

  it('Set', () => {
    const set = new Set([1, 2, 3]);
    const fn = (a: number) => a + 1;

    const res = mapL(fn, set);

    expect([...res]).toEqual([2, 3, 4]);
  });

  it('Map', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const fn = ([k, a]: [string, number]) => [k, a + 1];

    const res = mapL(fn, map);

    expect([...res]).toEqual([
      ['a', 2],
      ['b', 3],
      ['c', 4],
    ]);
  });
});
