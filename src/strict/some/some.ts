export default function some<T, R>(fn: (args: T) => R, iter: Iterable<T>) {
  const Iterable = iter[Symbol.iterator]();

  while (true) {
    const { value, done } = Iterable.next();

    if (done) return false;

    if (fn(value)) return true;
  }
}
