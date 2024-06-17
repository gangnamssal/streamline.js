import takeL from '../../lazy/take-l/take-l';

function take<T>(limit: number, iter: Iterable<T>) {
  return [...takeL(limit, iter)];
}

export default take;
