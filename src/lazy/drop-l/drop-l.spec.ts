import dropL from './drop-l';

describe('dropL', () => {
  it('should drop the first n elements from the iterable', () => {
    const iter = dropL(2, [1, 2, 3, 4, 5]);
    expect([...iter]).toEqual([3, 4, 5]);
  });

  it('should yield an empty iterable if n is greater than the length of the iterable', () => {
    const iter = dropL(10, [1, 2, 3, 4, 5]);
    expect([...iter]).toEqual([]);

    const iter2 = dropL(5, [1, 2, 3, 4, 5]);
    expect([...iter2]).toEqual([]);
  });

  it('should yield an full iterable if n is negative', () => {
    const iter = dropL(-1, [1, 2, 3, 4, 5]);
    expect([...iter]).toEqual([1, 2, 3, 4, 5]);
  });

  it('should yield an empty iterable if the iterable is empty', () => {
    const iter = dropL(10, []);
    expect([...iter]).toEqual([]);
  });

  it('should yield an empty iterable if n is 0', () => {
    const iter = dropL(0, [1, 2, 3, 4, 5]);
    expect([...iter]).toEqual([1, 2, 3, 4, 5]);
  });

  it('should be able to take a string as an argument', () => {
    const iter = dropL(2, 'hello');
    expect([...iter]).toEqual(['l', 'l', 'o']);
  });

  it('should return an empty iterable if the string is empty', () => {
    const iter = dropL(2, '');
    expect([...iter]).toEqual([]);
  });
});
