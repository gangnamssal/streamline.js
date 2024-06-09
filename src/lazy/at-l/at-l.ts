function* atL<T>(index: number, iter: Iterable<T>) {
  const arr = [...iter];
  const len = arr.length;

  if (index > 0 && index >= len) yield undefined;
  if (index < 0 && Math.abs(index) > len) yield undefined;

  let count = 0;

  if (index >= 0) {
    for (const item of iter) {
      if (count === index) yield item;

      count++;
    }
  } else if (index < 0) {
    for (let i = len - 1; i >= 0; i--) {
      if (i - len === index) yield arr[i];
    }
  }
}

export default atL;
