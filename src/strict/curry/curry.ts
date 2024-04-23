function curry<F extends (...args: any[]) => any>(
  func: F,
): <T extends any[]>(
  ...args: T
) => T['length'] extends Parameters<F>['length'] ? ReturnType<F> : (...args2: any[]) => ReturnType<F> {
  return (...args: any[]) => {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...args2: any[]) => curry(func)(...args, ...args2);
    }
  };
}

// const curry =
//   <R>(f: (...args: any[]) => R) =>
//   <Args, L extends unknown[]>(args: Args, ..._: L) =>
//     _.length ? f(args, ..._) : <Rest extends unknown[]>(..._: Rest) => f(args, ..._);

// const curry =
//   <R>(f: (...args: any[]) => R) =>
//   <T extends unknown[]>(...args: T) =>
//     args.length >= f.length
//       ? f(...args)
//       : <Rest extends unknown[]>(...rest: Rest) => f(...[...args, ...rest]);

// const curry =
//   <F extends (...args: any[]) => any>(f: F) =>
//   <T extends unknown[]>(...args: T) =>
//     args.length >= f.length
//       ? f(...args)
//       : <R extends unknown[]>(...rest: R) => f(...([...args, ...rest] as Parameters<F>));

// const curry =
//   <R = unknown>(f: (...args: any[]) => unknown) =>
//   (a: any, ..._: any[]): ((...args: any[]) => R) =>
//     _.length ? f(a, ..._) : (..._) => f(a, ..._);

export default curry;
