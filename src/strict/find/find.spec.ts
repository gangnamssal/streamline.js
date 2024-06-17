import find from './find';

describe('find', () => {
  it('should return the first element that satisfies the predicate', () => {
    const isEven = (n: number) => n % 2 === 0;
    const result = find(isEven, [1, 2, 3, 4, 5, 6]);

    expect(result).toBe(2);
  });

  it('should return undefined if no element satisfies the predicate', () => {
    const isEven = (n: number) => n % 2 === 0;
    const result = find(isEven, [1, 3, 5]);

    expect(result).toBeUndefined();
  });

  it('should return undefined if the iterable is empty', () => {
    const isEven = (n: number) => n % 2 === 0;
    const result = find(isEven, []);

    expect(result).toBeUndefined();
  });

  it('should work with strings', () => {
    const isVowel = (c: string) => 'aeiou'.includes(c);
    const result = find(isVowel, 'hello');

    expect(result).toBe('e');
  });

  it('should work with objects', () => {
    const isEven = (n: { value: number }) => n.value % 2 === 0;
    const result = find(isEven, [{ value: 1 }, { value: 2 }, { value: 3 }]);

    expect(result).toEqual({ value: 2 });
  });
});
