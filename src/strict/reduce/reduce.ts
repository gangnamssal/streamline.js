import goPromise from '../../utils/goPromise/goPromise';

// function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Acc, iter: Iterable<T | Promise<T>>): Acc;
// function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Iterable<T | Promise<T>>): Acc;
// function reduce<T, Acc>(
//   fn: (acc: Acc, value: T | Promise<T>) => Acc,
//   acc: Acc | Iterable<T | Promise<T>>,
//   iter?: Iterable<T | Promise<T>>,
// ): Acc {
//   let result;

//   if (!iter) {
//     const iterator = (acc as Iterable<T>)[Symbol.iterator]();

//     let { value, done } = iterator.next();

//     if (done) return value;

//     result = value;

//     while (!done) {
//       ({ value, done } = iterator.next());

//       if (!done) {
//         result = fn(result, value);
//       }
//     }
//   } else {
//     result = acc as Acc;

//     for (const value of iter) {
//       result = fn(result, value);
//     }
//   }

//   return result;
// }

// export default reduce;

// function reduce<T, Acc>(
//   fn: (acc: Acc, value: T) => Acc,
//   acc: Acc,
//   iter: Iterable<T | Promise<T>>,
// ): Acc | Promise<Acc> | Promise<Acc | Promise<Acc>>;
// function reduce<T, Acc>(
//   fn: (acc: Acc, value: T) => Acc,
//   acc: Iterable<T | Promise<T>>,
// ): Acc | Promise<Acc> | Promise<Acc | Promise<Acc>>;
// function reduce<T, Acc>(
//   fn: (acc: Acc, value: T) => Acc,
//   acc: Acc | Iterable<T | Promise<T>>,
//   iter?: Iterable<T | Promise<T>>,
// ): Acc | Promise<Acc> | Promise<Acc | Promise<Acc>> {
//   let iterator: Iterator<T | Promise<T>>;
//   let result;

//   if (!iter) {
//     iterator = (acc as Iterable<T | Promise<T>>)[Symbol.iterator]();
//     result = iterator.next().value;
//   } else {
//     result = acc as Acc;
//     iterator = iter[Symbol.iterator]();
//   }

//   return goPromise(result, function recur(acc: Acc): Acc | Promise<Acc> {
//     let { done, value } = iterator.next();
//     if (done) return acc;

//     acc = fn(acc, value);
//     if (acc instanceof Promise) {
//       return acc.then(recur);
//     }

//     return recur(acc);
//   });
// }

// export default reduce;
function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Acc, iter: Iterable<T>): Acc;
function reduce<T, Acc>(
  fn: (acc: Acc, value: T) => Acc,
  acc: Acc,
  iter: Iterable<Promise<T>>,
): Promise<Acc> | Promise<Acc | Promise<Acc>>;
function reduce<T, Acc>(fn: (acc: Acc, value: T) => Acc, acc: Iterable<T>): Acc;
function reduce<T, Acc>(
  fn: (acc: Acc, value: T) => Acc,
  acc: Iterable<Promise<T>>,
): Promise<Acc> | Promise<Acc | Promise<Acc>>;
function reduce<T, Acc>(
  fn: (acc: Acc, value: T) => Acc,
  acc: Acc | Iterable<T | Promise<T>>,
  iter?: Iterable<T | Promise<T>>,
): Acc | Promise<Acc> | Promise<Acc | Promise<Acc>> {
  let iterator: Iterator<T | Promise<T>>;
  let result;

  if (!iter) {
    iterator = (acc as Iterable<T | Promise<T>>)[Symbol.iterator]();
    result = iterator.next().value;
  } else {
    result = acc as Acc;
    iterator = iter[Symbol.iterator]();
  }

  return goPromise(result, function recur(acc): Acc | Promise<Acc> {
    let { done, value } = iterator.next();
    if (done) return acc;

    acc = fn(acc, value);
    if (acc instanceof Promise) {
      return acc.then(recur);
    }

    return recur(acc);
  });
}

export default reduce;
