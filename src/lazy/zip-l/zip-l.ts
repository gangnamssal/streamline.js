function* zipL<T, F>(iter1: Iterable<T>, iter2: Iterable<F>) {
  const iterator1 = iter1[Symbol.iterator]();
  const iterator2 = iter2[Symbol.iterator]();

  while (true) {
    const { value: value1, done: done1 } = iterator1.next();
    const { value: value2, done: done2 } = iterator2.next();

    if (done1 || done2) break;

    yield [value1, value2];
  }
}

export default zipL;
