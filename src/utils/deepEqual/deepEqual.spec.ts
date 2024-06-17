import deepEqual from './deepEqual';

describe('deepEqual', () => {
  it('should return true if the objects are deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(true);
  });

  it('should return false if the objects are not deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { d: 3, e: 5 } };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(false);
  });

  it('should return false if the objects are not deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { d: 3 } };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(false);
  });

  it('should return false if the objects are not deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { d: 3, e: 4, f: 5 } };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(false);
  });

  it('should return false if the objects are not deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { e: 4, d: 3 } };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(true);
  });

  it('should return false if the objects are not deeply equal', () => {
    const obj1 = { a: 1, b: 2, c: { d: 3, e: 4 } };
    const obj2 = { a: 1, b: 2, c: { d: 3 }, e: 4 };
    const actual = deepEqual(obj1, obj2);
    expect(actual).toBe(false);
  });
});
