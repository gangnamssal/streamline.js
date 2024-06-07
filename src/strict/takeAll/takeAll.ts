import { take } from '..';

export default function takeAll<T>(iter: Iterable<T>) {
  return take(Infinity, iter);
}
