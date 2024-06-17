export default function every<T, R>(fc: (args: T) => R, iter: Iterable<T>) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const { value, done } = iterator.next();

    if (done) return true;

    if (!fc(value)) return false;
  }
}
