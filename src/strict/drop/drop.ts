import { dropL } from '../../lazy';

function drop<T>(skip: number, iter: Iterable<T>) {
  return [...dropL(skip, iter)];
}

export default drop;
