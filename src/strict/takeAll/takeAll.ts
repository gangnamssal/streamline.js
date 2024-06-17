import take from '../take/take';

export default function takeAll<T>(iter: Iterable<T>) {
  return take(Infinity, iter);
}
