import go from '../go/go';

function pipe<T, U>(f: (...args: T[]) => unknown, ...fs: Array<(...args: any[]) => unknown>) {
  return (...as: T[]) => go(f(...as), ...fs) as U;
}

export default pipe;
