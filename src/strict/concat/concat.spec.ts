import concat from './concat';

describe('concat', () => {
  it('should concatenate two arrays', () => {
    const iter1 = [1, 2, 3];
    const iter2 = [4, 5, 6];
    const result = concat(iter1, iter2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should concatenate two strings', () => {
    const iter1 = 'hello';
    const iter2 = 'world';
    const result = concat(iter1, iter2);
    expect(result).toEqual(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']);
  });

  it('should concatenate an array and a string', () => {
    const iter1 = [1, 2, 3];
    const iter2 = 'world';
    const result = concat(iter1, iter2);
    expect(result).toEqual([1, 2, 3, 'w', 'o', 'r', 'l', 'd']);
  });
});
