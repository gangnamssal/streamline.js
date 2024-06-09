function* flatL<R, T extends Iterable<any> = Iterable<any>>(iter: T): Generator<R> {
  for (const item of iter) {
    if (item && item[Symbol.iterator]) yield* flatL(item);
    else yield item;
  }
}

export default flatL;
