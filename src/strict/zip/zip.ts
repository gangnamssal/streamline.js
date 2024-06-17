import zipL from '../../lazy/zip-l/zip-l';
import takeAll from '../takeAll/takeAll';

function zip<T, F>(iter1: Iterable<T>, iter2: Iterable<F>) {
  return takeAll(zipL(iter1, iter2));
}

export default zip;
