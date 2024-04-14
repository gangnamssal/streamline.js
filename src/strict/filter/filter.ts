function filter<T>(f: (arg: T) => boolean, iter: Iterable<T>): Partial<T>[] {
  let res: Partial<T>[] = [];

  for (const a of iter) {
    if (f(a)) res.push(a);
  }

  return res;
}

export default filter;
