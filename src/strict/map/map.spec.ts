import map from './map';
import curry from '../curry/curry';
import { KeyOfArray } from '../../global';

describe('map', () => {
  it('array', () => {
    const arr = [1, 2, 3] as const;
    const result = map((a: number) => a + 1, arr);

    expect(result).toEqual([2, 3, 4]);
  });

  it('array with curry', () => {
    const arr = [1, 2, 3] as const;
    const curryMap = curry(map<KeyOfArray<typeof arr>, number>)((a: number) => a + 1);
    const result = curryMap(arr);

    expect(result).toEqual([2, 3, 4]);
  });

  it('set', () => {
    const set = new Set([1, 2, 3]);
    const result = map((a: number) => a + 1, set);

    expect(result).toEqual([2, 3, 4]);
  });

  it('set with curry', () => {
    const set = new Set([1, 2, 3]);
    const curryMap = curry(map<number, number>)((a: number) => a + 1);
    const result = curryMap(set);

    expect(result).toEqual([2, 3, 4]);
  });

  it('map', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = map(([k, v]: [string, number]) => [k, v + 1], mapObject);

    expect(result).toEqual([
      ['a', 2],
      ['b', 3],
      ['c', 4],
    ]);
  });

  it('map with curry', () => {
    const mapObject = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const curryMap = curry(map<[string, number][], [string, number]>)(([k, v]: [string, number]) => [
      k,
      v + 1,
    ]);
    const result = curryMap(mapObject);

    expect(result).toEqual([
      ['a', 2],
      ['b', 3],
      ['c', 4],
    ]);
  });
});
