import { takeL } from '../../lazy';

function take<T>(limit: number, iter: Iterable<T>) {
  return [...takeL(limit, iter)];
}

export default take;
