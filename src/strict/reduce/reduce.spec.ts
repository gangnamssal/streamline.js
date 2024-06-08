import reduce from './reduce';
import go from '../go/go';

describe('reduce', () => {
  it('콜백함수, 초기값, iterable이 다 주어졌을 때', () => {
    const iter = [1, 2, 3, 4, 5] as const;
    const result = reduce((acc: number, val: number) => acc + val, 0, iter);
    expect(result).toBe(15);
  });

  it('초기값이 주어지지 않았을 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = reduce((acc: number, val: number) => acc + val, iter);
    expect(result).toBe(15);
  });

  it('초기값이 객체로 주어졌을 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = reduce((acc: Record<string, number>, val: number) => ({ ...acc, [val]: val }), {}, iter);
    expect(result).toEqual({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 });
  });

  it('초기값이 주어지지 않았을 때', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = reduce((acc: Record<string, number>, val: number) => {
      if (acc instanceof Object) return { ...acc, [val]: val };

      return { [acc]: acc, [val]: val };
    }, iter);
    expect(result).toEqual({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 });
  });
});
