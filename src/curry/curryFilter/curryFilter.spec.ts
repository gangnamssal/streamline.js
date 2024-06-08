import { go, pipe } from '../../strict';
import curryFilter from './curryFilter';

describe('curryFilter', () => {
  it('filter with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go<number[]>(
      arr,
      curryFilter((a: number) => a % 2 === 0),
    );

    expect(res).toEqual([2, 4]);
  });

  it('filter with pipe', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = pipe<number[]>(curryFilter((a: number) => a % 2 === 0));

    expect(res(arr)).toEqual([2, 4]);
  });
});
