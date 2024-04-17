import curry from './curry.ts';

describe('curry', () => {
  it('should curry a function', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);
    const add1 = curriedAdd(1);
    expect(add1(2)).toBe(3);
  });

  it('should curry a function with multiple arguments', () => {
    const add = (a: number, b: number, c: number) => a + b + c;
    const curriedAdd = curry(add);
    const add1 = curriedAdd(1);
    const add2 = add1(2, 3);
    expect(add2).toBe(6);
  });
});
