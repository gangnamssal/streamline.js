import { mapL } from '../../lazy';
import curry from '../curry/curry';

function map<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  return [...mapL(fn, iter)];
}

export default curry(map);
