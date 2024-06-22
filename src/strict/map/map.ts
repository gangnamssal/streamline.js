import mapL from '../../lazy/map-l/map-l';
import takeAll from '../takeAll/takeAll';

function map<T, R>(fn: (args: T) => R, iter: Iterable<T | Promise<T>>) {
  return takeAll(mapL(fn, iter));
}

export default map;
