import { go } from '../../strict';
import atC from './at-c';

describe('atC', () => {
  it('index has plus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 2;
    const result = atC(index)(iter);
    const result2 = atC(index, iter);

    expect(result).toBe(3);
    expect(result2).toBe(3);
  });

  it('index has minus value', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -2;
    const result = atC(index)(iter);
    expect(result).toBe(4);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 10;
    const result = atC(index)(iter);
    expect(result).toBe(undefined);
  });

  it('index is out of range', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = -10;
    const result = atC(index)(iter);
    expect(result).toBe(undefined);
  });

  it('index is zero', () => {
    const iter = [1, 2, 3, 4, 5];
    const index = 0;
    const result = atC(index)(iter);
    expect(result).toBe(1);
  });

  it('atC with go', () => {
    const arr = [1, 2, 3, 4, 5];
    const res = go<number>(arr, atC(-1));
    expect(res).toBe(5);
  });
});
