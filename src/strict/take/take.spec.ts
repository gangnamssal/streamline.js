import take from './take';
import curry from '../curry/curry';

describe('take', () => {
  it('limit가 0일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(0, iter);
    expect(result).toEqual([]);
  });

  it('limit가 0일 때 with curry', () => {
    const iter = [1, 2, 3, 4, 5];
    const curryTake = curry(take)(0);

    const result = curryTake(iter);

    expect(result).toEqual([]);
  });

  it('limit가 1일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(1, iter);
    expect(result).toEqual([1]);
  });

  it('limit가 1일 때 with curry', () => {
    const iter = [1, 2, 3, 4, 5];
    const curryTake = curry(take)(1);
    const result = curryTake(iter);
    expect(result).toEqual([1]);
  });

  it('limit가 3일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(3, iter);
    expect(result).toEqual([1, 2, 3]);
  });

  it('limit가 3일 때 with curry', () => {
    const iter = [1, 2, 3, 4, 5];
    const curryTake = curry(take)(3);
    const result = curryTake(iter);
    expect(result).toEqual([1, 2, 3]);
  });

  it('limit가 10일 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = take(10, iter);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('limit가 10일 때 with curry', () => {
    const iter = [1, 2, 3, 4, 5];
    const curryTake = curry(take)(10);
    const result = curryTake(iter);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
