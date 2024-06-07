function reduceL<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Acc, iter: Iterable<T>): Generator<Acc>;
function reduceL<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Iterable<T>): Generator<Acc>;
function* reduceL<T, Acc>(
  fn: (acc: Acc, value: T) => Acc,
  acc: Acc | Iterable<T>,
  iter?: Iterable<T>,
): Generator<Acc> {
  let iterator: Iterator<T>;

  if (iter === undefined) {
    iterator = (acc as Iterable<T>)[Symbol.iterator]();
    const firstIteration = iterator.next();
    if (firstIteration.done) return;
    acc = firstIteration.value as unknown as Acc;
  } else {
    iterator = iter[Symbol.iterator]();
  }

  while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    acc = fn(acc as Acc, value);
    yield acc;
  }
}

export default reduceL;
