function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Acc, iter: Iterable<T>): Acc;
function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Iterable<T>): Acc;
function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Acc | Iterable<T>, iter?: Iterable<T>): Acc {
  let result: Acc;

  if (!iter) {
    const iterator = (acc as Iterable<T>)[Symbol.iterator]();
    let { value, done } = iterator.next();
    if (done) return value as Acc;
    result = value as unknown as Acc;
    while (!done) {
      ({ value, done } = iterator.next());
      if (!done) {
        result = fn(result, value);
      }
    }
  } else {
    result = acc as Acc;
    for (const value of iter) {
      result = fn(result, value);
    }
  }

  return result;
}

export default reduce;
