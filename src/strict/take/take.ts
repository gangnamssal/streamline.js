const take = <T>(limit: number, iter: Iterable<T>) => {
  const res: T[] = [];

  for (const a of iter) {
    if (res.length === limit) return res;

    res.push(a);
  }

  return res;
};

export default take;
