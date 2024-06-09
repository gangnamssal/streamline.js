import { go } from '..';
import at from './at';

describe('at', () => {
  it('index has plus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 2;
    const result = at(index, iter);
    expect(result).toBe(3);
  });

  it('index has minus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -2;
    const result = at(index, iter);
    expect(result).toBe(4);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 10;
    const result = at(index, iter);
    expect(result).toBe(undefined);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -10;
    const result = at(index, iter);
    expect(result).toBe(undefined);
  });

  it('index is zero', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 0;
    const result = at(index, iter);
    expect(result).toBe(1);
  });

  it('at with go', () => {
    const arr = [1, 2, 3, 4, 5];
    const res = go<number>(arr, arr => at(-1, arr));
    expect(res).toBe(5);
  });
});
