function concat<T, F>(iter1: Iterable<T>, iter2: Iterable<F>) {
  return [...iter1, ...iter2];
}

export default concat;
