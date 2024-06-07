import { mapL } from '../../lazy';

function map<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  return [...mapL(fn, iter)];
}

export default map;
