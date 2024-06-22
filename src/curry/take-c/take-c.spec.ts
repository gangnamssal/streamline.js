import { go, pipe } from '../../strict';
import takeC from './take-c';

describe('curryTake', () => {
  it('take with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go<number[]>(arr, takeC(2));

    expect(res).toEqual([1, 2]);
  });

  it('take with pipe', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = pipe<number[]>(takeC(2));

    expect(res(arr)).toEqual([1, 2]);
  });

  it('take with promise', () => {
    const arr = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
      Promise.resolve(4),
      Promise.resolve(5),
    ];

    const res = go<Promise<number[]>>(arr, takeC(2));

    expect(res).toEqual([Promise.resolve(1), Promise.resolve(2)]);
  });
});
