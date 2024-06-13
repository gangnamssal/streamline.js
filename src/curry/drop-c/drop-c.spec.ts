import dropC from './drop-c';
import { go } from '../../strict';

describe('drop-c', () => {
  it('should drop the first n elements from an array', () => {
    const drop3 = dropC(3);
    expect(drop3([1, 2, 3, 4, 5])).toEqual([4, 5]);
  });

  it('should return an empty array if n is greater than the length of the array', () => {
    const drop6 = dropC(6);
    expect(drop6([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('should return an empty array if n is equal to the length of the array', () => {
    const drop5 = dropC(5);
    expect(drop5([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('should return the original array if n is zero', () => {
    const drop0 = dropC(0);
    expect(drop0([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the original array if n is negative', () => {
    const dropNeg1 = dropC(-1);
    expect(dropNeg1([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return object value', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }];

    const drop6 = dropC(2);

    expect(drop6(arr)).toEqual([{ c: 3 }, { d: 4 }, { e: 5 }]);
  });

  it('dropC with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go(arr, dropC(3));

    expect(res).toEqual([4, 5]);
  });
});
