import * as _ from '..';

class Streamline<T> {
  constructor(public iter: Iterable<T>) {}

  public chunk(size: number) {
    return st(_.chunk(size, this.iter));
  }

  public concat<F>(iter: Iterable<F>) {
    return st(_.concat(this.iter, iter));
  }

  public drop(n: number) {
    return st(_.drop(n, this.iter));
  }

  public filter<R>(fn: (args: T) => R) {
    return st(_.filter(fn, this.iter));
  }

  public flat() {
    return st(_.flat(this.iter));
  }

  public map<R>(fn: (args: T) => R) {
    return st(_.map(fn, this.iter));
  }

  public zip<F>(iter: Iterable<F>) {
    return st(_.zip(this.iter, iter));
  }

  public to<U>(fn: (args: Iterable<T>) => U): U {
    return fn(this.iter);
  }
}

export default function st<T>(iter: Iterable<T>) {
  return new Streamline(iter);
}
