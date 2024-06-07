import { filterL } from '../../lazy';

function filter<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  return [...filterL(fn, iter)];
}

export default filter;
