import zipL from './zip-l';

describe('zip-l', () => {
  it('should zip two arrays', () => {
    const result = zipL([1, 2, 3], ['a', 'b', 'c']);
    expect([...result]).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
    ]);
  });

  it('should zip two arrays', () => {
    const result = zipL([1, 2, 3], ['a', 'b', 'c']);
    const iterator = result[Symbol.iterator]();

    expect(iterator.next()).toEqual({ value: [1, 'a'], done: false });
    expect(iterator.next()).toEqual({ value: [2, 'b'], done: false });
    expect(iterator.next()).toEqual({ value: [3, 'c'], done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });

  it('should zip two arrays with different lengths', () => {
    const result = zipL([1, 2, 3], ['a', 'b']);
    expect([...result]).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('should zip two arrays with different lengths', () => {
    const result = zipL([1, 2], ['a', 'b', 'c']);
    expect([...result]).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
  });

  it('should zip two arrays with zero length', () => {
    const result = zipL([], []);
    expect([...result]).toEqual([]);
  });

  it('should zip two arrays with zero length', () => {
    const result = zipL([1, 2], []);
    expect([...result]).toEqual([]);
  });
});
