// const curry =
//   <F extends (...args: any[]) => any>(f: F) =>
//   <T extends unknown[]>(...args: T) =>
//     args.length >= f.length
//       ? f(...args)
//       : <R extends unknown[]>(...rest: R) => f(...([...args, ...rest] as Parameters<F>));

// const curry =
//   <T>(f: (...args: any[]) => T) =>
//   <A>(a: A, ..._: unknown[]) =>
//     _.length ? f(a, ..._) : <R>(..._: R[]) => f(a, ..._);

const curry =
  <F extends (...args: any[]) => any>(f: F) =>
  <T extends any[]>(...args: T) =>
    args.length >= f.length
      ? f(...(args as any))
      : <R extends any[]>(...rest: R) => curry(f)(...args, ...rest);

export default curry;
