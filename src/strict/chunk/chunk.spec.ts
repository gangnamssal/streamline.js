import chunk from './chunk';

describe('chunk', () => {
  it('should chunk the given iterable', () => {
    const res = chunk(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(res).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('should return empty iterable if the given iterable is empty', () => {
    const res = chunk(2, []);
    expect(res).toEqual([]);
  });

  it('should return empty iterable if the given size is 0', () => {
    const res = chunk(0, [1, 2, 3]);
    expect(res).toEqual([]);
  });
});
