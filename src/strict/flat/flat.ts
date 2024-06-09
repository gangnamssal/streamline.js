import { flatL } from '../../lazy';

function flat<R, T extends Iterable<any> = Iterable<any>>(iter: T) {
  return [...flatL(iter)];
}

export default flat;
