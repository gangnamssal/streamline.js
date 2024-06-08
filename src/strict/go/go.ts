import reduce from '../reduce/reduce';

function go<T>(arg: T, ...fns: Array<(arg: T) => T>): T;
function go<T, R>(arg: T, ...fns: Array<(arg: T) => R>): R;
function go(arg: any, ...fns: Array<(arg: any) => any>) {
  return reduce((a, f) => f(a), arg, fns);
}

export default go;
