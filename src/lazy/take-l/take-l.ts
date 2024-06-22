function* takeL<T>(limit: number, iter: Iterable<T | Promise<T>>) {
  const iterator = iter[Symbol.iterator]();

  while (limit-- > 0) {
    const { value, done } = iterator.next();

    if (done) break;

    yield value instanceof Promise ? value.then(value => value) : value;
  }
}

export default takeL;
