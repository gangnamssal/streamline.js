function* mapL<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const { value, done } = iterator.next();

    if (done) break;

    yield fn(value);
  }
}

export default mapL;
