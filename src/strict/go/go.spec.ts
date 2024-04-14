import go from './go.ts';
import reduce from '../reduce/reduce.ts';

describe('go', () => {
  it('go', () => {
    expect(
      go(
        1,
        a => a + 1,
        a => a * 2,
      ),
    ).toBe(4);
  });

  it('go 활용 예제 1', () => {
    const add = (a: number, b: number) => a + b;
    const multiply = (a: number, b: number) => a * b;

    const addAndMultiply = go(
      1,
      a => add(a, 2),
      a => multiply(a, 3),
    );
    expect(addAndMultiply).toBe(9);
  });

  it('go 활용 예제 2', () => {
    const arr = [1, 2, 3, 4, 5];

    const addAndMultiply = go(arr, arr => reduce<number, number>((a, b) => a + b, arr));

    expect(addAndMultiply).toBe(15);
  });
});
