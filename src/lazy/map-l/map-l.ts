import goPromise from '../../utils/goPromise/goPromise';

function* mapL<T, R>(fn: (args: T) => R, iter: Iterable<T | PromiseLike<T>>) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const { value, done } = iterator.next();

    if (done) break;

    yield goPromise(value, fn);
  }
}

export default mapL;
