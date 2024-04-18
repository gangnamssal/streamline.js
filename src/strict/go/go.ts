import reduce from '../reduce/reduce';

function go<U extends T, T>(...args: [U, ...Array<(arg: U) => T>]): T {
  return reduce((a, f) => f(a), args[0], args.slice(1) as Array<(arg: U) => U>);
}

export default go;
