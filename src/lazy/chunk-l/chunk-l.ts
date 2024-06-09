import { take } from '../../strict';

function* chunkL<T>(size: number, iter: Iterable<T>) {
  if (size <= 0) return;

  const iterator = iter[Symbol.iterator]();

  while (true) {
    const arr = [
      ...take(size, {
        [Symbol.iterator]() {
          return iterator;
        },
      }),
    ];

    if (arr.length) yield arr;
    if (arr.length < size) break;
  }
}

export default chunkL;
