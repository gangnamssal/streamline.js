import go from '../go/go';

function pipe<T, U, V = unknown>(f: (...args: T[]) => U, ...fs: Array<(arg: U) => V>) {
  return (...as: T[]) => go(f(...as), ...fs);
}

export default pipe;
