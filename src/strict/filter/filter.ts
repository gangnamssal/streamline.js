import filterL from '../../lazy/filter-l/filter-l';
import takeAll from '../takeAll/takeAll';

function filter<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  return takeAll(filterL(fn, iter));
}

export default filter;
