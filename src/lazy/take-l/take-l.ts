function* takeL<T>(limit: number, iter: Iterable<T>) {
  const iterator = iter[Symbol.iterator]();

  let index = 0;

  while (limit-- > 0) {
    const { value, done } = iterator.next();

    if (done) break;

    yield value;
  }
}

export default takeL;