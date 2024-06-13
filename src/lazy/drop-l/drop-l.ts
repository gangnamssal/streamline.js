function* dropL<T>(skip: number, iter: Iterable<T>) {
  if (skip <= 0) return yield* iter;

  let count = 0;

  for (const value of iter) {
    if (count++ < skip) continue;
    yield value;
  }
}

export default dropL;
