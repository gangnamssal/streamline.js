import takeL from './take-l';

describe('takeL', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = [...takeL(2, arr)];

    expect(result).toEqual([1, 2]);
  });

  it('array have no item', () => {
    const arr = [] as const;
    const result = [...takeL(2, arr)];

    expect(result).toEqual([]);
  });

  it('limit have minus value', () => {
    const arr = [1, 2, 3] as const;
    const result = [...takeL(-2, arr)];

    expect(result).toEqual([]);
  });

  it('limit have infinity value', () => {
    const arr = [1, 2, 3] as const;
    const result = [...takeL(Infinity, arr)];

    expect(result).toEqual([1, 2, 3]);
  });

  it('limit have -infinity value', () => {
    const arr = [1, 2, 3] as const;
    const result = [...takeL(-Infinity, arr)];

    expect(result).toEqual([]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = [...takeL(2, set)];

    expect(result).toEqual([1, 2]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = [...takeL(2, mapObject)];

    expect(result).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });

  it('promise', () => {
    const arr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    const result = [...takeL(2, arr)];

    expect(result).toEqual([Promise.resolve(1), Promise.resolve(2)]);
  });
});
