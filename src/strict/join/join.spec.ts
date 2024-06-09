import join from './join';
import { go } from '..';
import { mapC } from '../../curry';

describe('join', () => {
  it('joins an array of strings with a separator', () => {
    const result = join(' ', ['a', 'b', 'c']);
    expect(result).toBe('a b c');
  });

  it('joins an array of numbers with a separator', () => {
    const result = join('-', [1, 2, 3]);
    expect(result).toBe('1-2-3');
  });

  it('joins an array of strings with a different separator', () => {
    const result = join('..', ['a', 'b', 'c']);
    expect(result).toBe('a..b..c');
  });

  it('joins an array of numbers with a different separator', () => {
    const result = join('..', [1, 2, 3]);
    expect(result).toBe('1..2..3');
  });

  it('joins an array of strings with no separator', () => {
    const result = join('', ['a', 'b', 'c']);
    expect(result).toBe('abc');
  });

  it('joins an array of numbers with no separator', () => {
    const result = join('', [1, 2, 3]);
    expect(result).toBe('123');
  });

  it('object with a separator', () => {
    const obj = { a: 1, b: 2, c: 3 };

    const res = go(
      Object.entries(obj),
      mapC(([k, v]: [string, number]) => `${k}=${v}`),
      arr => join('&', arr),
    );

    expect(res).toBe('a=1&b=2&c=3');
  });
});
