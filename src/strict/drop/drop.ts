import dropL from '../../lazy/drop-l/drop-l';
import takeAll from '../takeAll/takeAll';

function drop<T>(skip: number, iter: Iterable<T>) {
  return takeAll(dropL(skip, iter));
}

export default drop;
