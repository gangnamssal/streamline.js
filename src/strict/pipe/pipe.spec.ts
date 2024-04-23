import curry from '../curry/curry';
import filter from '../filter/filter';
import map from '../map/map';
import reduce from '../reduce/reduce';
import pipe from './pipe';

describe('Pipe', () => {
  it('인수가 하나만 주어질 때', () => {
    const f = pipe<number, number>(
      a => a + 1,
      a => a + 10,
      a => a + 100,
    );

    expect(f(0)).toBe(111);
  });

  it('인수가 두 개 주어질 때', () => {
    const f = pipe<number, number>(
      (a, b) => a + b,
      a => a + 10,
      a => a + 100,
    );

    expect(f(1, 2)).toBe(113);
  });

  it('인수가 두 개 주어질 때 with curry', () => {
    const curryAdd = curry((a: number, b: number) => a + b);

    const f = pipe<number, number>(
      curryAdd,
      a => a + 10,
      a => a + 100,
    );

    expect(f(1, 2)).toBe(113);
  });

  it('pipe 활용 with curry', () => {
    const curryMap = curry(map<number, number>)((a: number) => a + 1);
    const curryFilter = curry(filter<number>)((a: number) => a % 2 !== 0);
    const curryReduce = curry(reduce<number, number>)((a: number, b: number) => a + b, 0);

    const f = pipe<number[], number>(curryMap, curryFilter, curryReduce);

    expect(f([1, 2, 3, 4, 5])).toBe(8);
  });

  it('pipe 활용2', () => {
    const f = pipe<number[], number>(a => reduce<number, number>((a, b) => a + b, a));

    expect(f([1, 2, 3, 4, 5])).toBe(15);
  });

  it('pipe 활용2 with curry', () => {
    const curryReduce = curry(reduce<number, number>)((a: number, b: number) => a + b, 0);
    const f = pipe<number[], number>(curryReduce);

    expect(f([1, 2, 3, 4, 5])).toBe(15);
  });
});
