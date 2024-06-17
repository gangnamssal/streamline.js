import deepEqual from '../../utils/deepEqual/deepEqual';

export default function findIndex<T, F extends T>(findValue: F, iter: Iterable<T>) {
  const iterator = iter[Symbol.iterator]();
  let findIndex = 0;

  while (true) {
    const { value, done } = iterator.next();

    if (done) return -1;

    const isEqual = deepEqual(value, findValue);

    if (isEqual) return findIndex;

    findIndex++;
  }
}
