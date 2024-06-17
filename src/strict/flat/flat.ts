import flatL from '../../lazy/flat-l/flat-l';
import takeAll from '../takeAll/takeAll';

function flat<R, T extends Iterable<any> = Iterable<any>>(iter: T) {
  return takeAll(flatL(iter));
}

export default flat;
