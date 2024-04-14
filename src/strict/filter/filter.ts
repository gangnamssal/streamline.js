function filter<T>(f: (arg: T) => boolean | number, iter: Iterable<T>): T[] {
  let res: T[] = [];

  for (const a of iter) {
    if (f(a)) res.push(a);
  }

  return res;
}

export default filter;
