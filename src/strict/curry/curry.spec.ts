import curry from './curry';

describe('curry', () => {
  it('should curry a function', () => {
    const mult = curry((a: number, b: number) => a * b);
    expect(mult(1)(2)).toBe(2);
  });

  it('should curry a function with multiple arguments', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curriedAdd = curry(add);
    const add1 = curriedAdd(1);
    const add2 = add1(2, 3);
    expect(add2).toBe(6);
  });
});
