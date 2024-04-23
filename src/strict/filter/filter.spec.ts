import { KeyOfArray } from '../../global';
import curry from '../curry/curry';
import filter from './filter';

describe('filter', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = filter((a: number) => a > 1, arr);

    expect(result).toEqual([2, 3]);
  });

  it('array with curry', () => {
    const arr = [1, 2, 3] as const;
    const curryFilter = curry(filter<KeyOfArray<typeof arr>>)((a: number) => a > 1);

    const result = curryFilter(arr);

    expect(result).toEqual([2, 3]);
  });

  it('array2', () => {
    const arr = [1, 2, 3] as const;
    const result = filter((a: number) => a % 2 !== 0, arr);

    expect(result).toEqual([1, 3]);
  });

  it('array2 with curry', () => {
    const arr = [1, 2, 3] as const;
    const curryFilter = curry(filter<KeyOfArray<typeof arr>>)((a: number) => a % 2 !== 0);

    const result = curryFilter(arr);

    expect(result).toEqual([1, 3]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = filter((a: number) => a > 1, set);

    expect(result).toEqual([2, 3]);
  });

  it('set with curry', () => {
    const set = new Set([1, 2, 3]);
    const curryFilter = curry(filter<number>)((a: number) => a > 1);
    const result = curryFilter(set);

    expect(result).toEqual([2, 3]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = filter(([k, v]: [string, number]) => v > 1, mapObject);

    expect(result).toEqual([
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('map with curry', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const curryFilter = curry(filter<['a' | 'b' | 'c', number]>)(([k, v]: [string, number]) => v > 1);
    const result = curryFilter(mapObject);

    expect(result).toEqual([
      ['b', 2],
      ['c', 3],
    ]);
  });
});
