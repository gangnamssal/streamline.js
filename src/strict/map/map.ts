function map<T, U>(f: (arg: T) => U, iter: Iterable<T>): U[] {
  let res: U[] = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

export default map;
