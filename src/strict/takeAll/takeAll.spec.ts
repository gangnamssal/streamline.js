import takeAll from './takeAll';

describe('takeAll', () => {
  it('이터러블을 받아서 이터러블을 반환한다.', () => {
    const iter = [1, 2, 3, 4, 5];
    const result = takeAll(iter);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('이터러블을 받아서 이터러블을 반환한다.', () => {
    const iter = [1, 2, 3, 4, 5, 6, 7];
    const result = takeAll(iter);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it('이터러블을 받아서 이터러블을 반환한다.', () => {
    const iter = [1, 2, 3];
    const result = takeAll(iter);
    expect(result).toEqual([1, 2, 3]);
  });
  it('이터러블을 받아서 이터러블을 반환한다.', () => {
    const iter: any[] = [];
    const result = takeAll(iter);
    expect(result).toEqual([]);
  });
});
