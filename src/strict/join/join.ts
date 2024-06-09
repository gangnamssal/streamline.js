import { reduce } from '..';

function join<T>(sep = '.', iter: Iterable<T>) {
  return reduce((a, b) => `${a}${sep}${b}`, iter);
}

export default join;
