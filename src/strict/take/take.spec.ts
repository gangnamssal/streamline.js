import take from './take';

describe('take', () => {
  it('limit가 0일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(0, iter);
    expect(result).toEqual([]);
  });

  it('limit가 1일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(1, iter);
    expect(result).toEqual([1]);
  });

  it('limit가 3일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(3, iter);
    expect(result).toEqual([1, 2, 3]);
  });

  it('limit가 10일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(10, iter);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('limit가 Infinity일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(Infinity, iter);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
