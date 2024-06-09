import { atL } from '../../lazy';

function at<T>(index: number, iter: Iterable<T>) {
  const res = atL(index, iter);
  return res.next().value;
}

export default at;
