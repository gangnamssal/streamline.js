import * as _ from '..';

class Streamline<T> {
  constructor(public iter: Iterable<T>) {}

  public at(index: number) {
    return _.at(index, this.iter);
  }

  public chunk(size: number) {
    return st(_.chunk(size, this.iter));
  }

  public concat<F>(iter: Iterable<F>) {
    return st(_.concat(this.iter, iter));
  }

  public drop(n: number) {
    return st(_.drop(n, this.iter));
  }

  public every<R>(fn: (args: T) => R) {
    return _.every(fn, this.iter);
  }

  public filter<R>(fn: (args: T) => R) {
    return st(_.filter(fn, this.iter));
  }

  public find<R>(fn: (args: T) => R) {
    return _.find(fn, this.iter);
  }

  public findIndex<R extends T>(findValue: R) {
    return _.findIndex(findValue, this.iter);
  }

  public flat() {
    return st(_.flat(this.iter));
  }

  public join(separator?: string) {
    return _.join(separator, this.iter);
  }

  public map<R>(fn: (args: T) => R) {
    return st(_.map(fn, this.iter));
  }

  public reduce<Acc>(fn: (acc: Acc, value: T) => Acc, acc?: Acc) {
    if (acc) return _.reduce(fn, acc, this.iter);

    return _.reduce(fn, this.iter);
  }

  public some(fn: (args: T) => boolean) {
    return _.some(fn, this.iter);
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
