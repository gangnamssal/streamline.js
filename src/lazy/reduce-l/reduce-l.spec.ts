import reduceL from './reduce-l';

describe('reduceL', () => {
  it('acc 및 iter 값이 있을 경우', () => {
    const iterable = [1, 2, 3, 4, 5];
    const reducer = (acc: number, value: number) => acc + value;
    const result = [...reduceL(reducer, 0, iterable)];
    expect(result).toEqual([1, 3, 6, 10, 15]);
  });

  it('acc 및 iter 값이 있는 경우2', () => {
    const iterable = [1, 2, 3, 4, 5];
    const reducer = (acc: number, value: number) => acc + value;
    const result = [...reduceL(reducer, 10, iterable)].at(-1);
    expect(result).toEqual(25);
  });

  it('결과로 객체를 만들 경우', () => {
    const iterable = [1, 2, 3, 4, 5];
    const reducer = (acc: { sum: number; count: number }, value: number) => ({
      sum: acc.sum + value,
      count: acc.count + 1,
    });
    const result = [...reduceL(reducer, { sum: 0, count: 0 }, iterable)].at(-1);
    expect(result).toEqual({ sum: 15, count: 5 });
  });

  it('결과로 객체를 만들 경우2', () => {
    const iterable = [1, 2, 3, 4, 5];

    const result = [
      ...reduceL(
        (acc: Record<string, number>, value: number) => {
          if (!acc[value]) return { ...acc, [value]: 1 };

          acc[value]++;
          return acc;
        },
        {},
        iterable,
      ),
    ].at(-1);
    expect(result).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
  });

  it('iter 값이 없는 경우', () => {
    const iterable = [1, 2, 3, 4, 5];
    const reducer = (acc: number, value: number) => acc + value;
    const result = [...reduceL(reducer, iterable)];
    expect(result).toEqual([3, 6, 10, 15]);
  });
});
