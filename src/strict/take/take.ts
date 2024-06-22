import takeL from '../../lazy/take-l/take-l';

function take<T>(limit: number, iter: Iterable<T>): T[];
function take<T>(limit: number, iter: Iterable<Promise<T>>): Promise<T>[];
function take<T>(limit: number, iter: Iterable<T | Promise<T>>) {
  return [...takeL(limit, iter)];
}

export default take;
