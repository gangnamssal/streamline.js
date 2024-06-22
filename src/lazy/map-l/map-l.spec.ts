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

  it('promise', () => {
    const arr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    const fn = (a: number) => a + 1;

    const res = mapL(fn, arr);

    expect([...res]).toEqual([Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)]);
  });

  it('promise', () => {
    const arr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    const fn = (a: number) => a + 1;

    const res = mapL(fn, arr);

    const iterator = res[Symbol.iterator]();

    expect(iterator.next()).toEqual({ value: Promise.resolve(2), done: false });
    expect(iterator.next()).toEqual({ value: Promise.resolve(3), done: false });
    expect(iterator.next()).toEqual({ value: Promise.resolve(4), done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
