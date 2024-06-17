import atL from '../../lazy/at-l/at-l';

function at<T>(index: number, iter: Iterable<T>) {
  const res = atL(index, iter);
  return res.next().value;
}

export default at;
