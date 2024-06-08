import reduce from '../reduce/reduce';
import pipe from './pipe';
import map from '../map/map';
import filter from '../filter/filter';

describe('Pipe', () => {
  it('인수가 하나만 주어질 때', () => {
    const f = pipe(
      (a: number) => a + 1,
      (a: number) => a + 10,
      (a: number) => a + 100,
    );

    expect(f(0)).toBe(111);
  });

  it('인수가 두 개 주어질 때', () => {
    const f = pipe(
      (a, b) => a + b,
      a => a + 10,
      a => a + 100,
    );

    expect(f(1, 2)).toBe(113);
  });

  it('pipe 활용2', () => {
    const f = pipe((a: number[]) => reduce((a: number, b: number) => a + b, a));

    expect(f([1, 2, 3, 4, 5])).toBe(15);
  });

  it('pipe 활용3', () => {
    const f = pipe<number>(
      (a: number[]) => map((a: number) => a + 1, a),
      (a: number[]) => filter((a: number) => a % 2, a),
      (a: number[]) => reduce((a: number, b: number) => a + b, 0, a),
    );

    expect(f([1, 2, 3, 4, 5])).toBe(8);
  });
});
