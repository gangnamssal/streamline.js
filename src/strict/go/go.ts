import reduce from '../reduce/reduce.ts';

function go<U, T>(...args: [U, ...Array<(arg: U) => T>]) {
  return reduce((a, f) => f(a), args[0], args.slice(1) as Array<(arg: U) => U>);
}

export default go;
