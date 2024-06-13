import drop from './drop';

describe('drop', () => {
  it('should drop the first n elements from the iterable', () => {
    const iter = drop(2, [1, 2, 3, 4, 5]);
    expect(iter).toEqual([3, 4, 5]);
  });

  it('should yield an empty iterable if n is greater than the length of the iterable', () => {
    const iter = drop(10, [1, 2, 3, 4, 5]);
    expect(iter).toEqual([]);

    const iter2 = drop(5, [1, 2, 3, 4, 5]);
    expect(iter).toEqual([]);
  });

  it('should yield an full iterable if n is negative', () => {
    const iter = drop(-1, [1, 2, 3, 4, 5]);
    expect(iter).toEqual([1, 2, 3, 4, 5]);
  });

  it('should yield an empty iterable if the iterable is empty', () => {
    const iter = drop(10, []);
    expect(iter).toEqual([]);
  });

  it('should yield an empty iterable if n is 0', () => {
    const iter = drop(0, [1, 2, 3, 4, 5]);
    expect(iter).toEqual([1, 2, 3, 4, 5]);
  });

  it('should be able to take a string as an argument', () => {
    const iter = drop(2, 'hello');
    expect(iter).toEqual(['l', 'l', 'o']);
  });

  it('should return an empty iterable if the string is empty', () => {
    const iter = drop(2, '');
    expect(iter).toEqual([]);
  });

  it('should return object value', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

    const drop6 = drop(2, arr);

    expect(drop6).toEqual([{ c: 3 }, { d: 4 }, { e: 5 }]);
  });
});
