import { chunkL } from '../../lazy';

function chunk<T>(size: number, iter: Iterable<T>) {
  return [...chunkL(size, iter)];
}

export default chunk;
