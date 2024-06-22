import take from './take';
import curry from '../curry/curry';

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

  it('promise가 포함된 경우', () => {
    const iter = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
      Promise.resolve(4),
      Promise.resolve(5),
    ];
    const result = take(3, iter);
    expect(result).toEqual([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]);
  });
});
