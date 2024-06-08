import reduce from '../reduce/reduce';

function go<R, T = any>(arg: T, ...fns: Array<(arg: any) => any>): R {
  return reduce((a: any, f: any) => f(a), arg, fns);
}

export default go;
