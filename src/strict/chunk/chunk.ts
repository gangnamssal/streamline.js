import chunkL from '../../lazy/chunk-l/chunk-l';
import takeAll from '../takeAll/takeAll';

function chunk<T>(size: number, iter: Iterable<T>) {
  return takeAll(chunkL(size, iter));
}

export default chunk;
