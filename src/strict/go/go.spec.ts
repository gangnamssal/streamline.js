import go from './go';
import reduce from '../reduce/reduce';

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

    const addAndMultiply = go<number>(
      1,
      a => add(a, 2),
      a => multiply(a, 3),
    );
    expect(addAndMultiply).toBe(9);
  });

  it('go 활용 예제 2', () => {
    const arr = [1, 2, 3, 4, 5];

    const addAndMultiply = go<number>(arr, arr => reduce((a: number, b: number) => a + b, arr));

    expect(addAndMultiply).toBe(15);
  });

  it('go 활용 예제 3', () => {
    const arr = [1, 2, 3, 4, 5];

    const addAndMultiply = go<Record<string, number>>(arr, arr =>
      reduce((a: Record<string, number>, b: number) => {
        if (typeof a === 'number') return { [a]: a };
        return { ...a, [b]: b };
      }, arr),
    );

    expect(addAndMultiply).toEqual({ '1': 1, '3': 3, '4': 4, '5': 5 });
  });
});
