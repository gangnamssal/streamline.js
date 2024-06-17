function find<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const { value, done } = iterator.next();

    if (done) return;

    if (fn(value)) return value;
  }
}

export default find;
