import reduce from '../reduce/reduce';

function join<T>(sep = ',', iter: Iterable<T>): string {
  return reduce((a, b) => `${a}${sep}${b}`, iter);
}

export default join;
