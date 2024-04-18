function reduce<U, T>(f: (acc: U, val: T) => U, acc: Iterable<T>): U;
function reduce<U, T>(f: (acc: U, val: T) => U, acc: U, iter: Iterable<T>): U;
function reduce<U, T>(f: (acc: U, val: T) => U, acc: U | Iterable<T>, iter?: Iterable<T>): U {
  if (!iter) {
    if (isIterable(acc)) {
      iter = acc[Symbol.iterator]() as IterableIterator<T>;
      acc = (iter as IterableIterator<T>).next().value;
    } else {
      throw new TypeError('acc is not iterable');
    }
  }

  let iterable = iter[Symbol.iterator]() as IterableIterator<T>;
  let result: U = acc as U;

  for (const a of iterable) result = f(result, a);

  return result;
}

function isIterable<T>(obj: any): obj is Iterable<T> {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}

export default reduce;
