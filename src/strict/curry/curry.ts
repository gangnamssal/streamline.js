const curry =
  (f: (...args: any[]) => any) =>
  (a: any, ..._: any[]) =>
    _.length ? f(a, ..._) : (..._: any[]) => f(a, ..._);

export default curry;
