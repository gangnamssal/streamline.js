import atL from './at-l';
import { go, takeAll } from '../..';
import { reduceL } from '..';

describe('at-l', () => {
  it('index has plus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 2;
    const result = [...atL(index, iter)];
    expect(result).toEqual([3]);
  });

  it('index has minus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -2;
    const result = [...atL(index, iter)];
    expect(result).toEqual([4]);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 10;
    const result = [...atL(index, iter)];
    expect(result).toEqual([]);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -10;
    const result = [...atL(index, iter)];
    expect(result).toEqual([]);
  });

  it('index is zero', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 0;
    const result = [...atL(index, iter)];
    expect(result).toEqual([1]);
  });

  it('at with go', () => {
    const arr = [1, 2, 3, 4, 5];
    const res = go<number>(
      arr,
      arr => reduceL((a: number, b: number) => a + b, arr),
      arr => atL(-1, arr),
      takeAll,
    );
    expect(res).toEqual([15]);
  });
});
