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
  it('promise가 포함된 경우', () => {
    const iter = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
      Promise.resolve(4),
      Promise.resolve(5),
    ];
    const result = takeAll(iter);
    expect(result).toEqual([
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
      Promise.resolve(4),
      Promise.resolve(5),
    ]);
  });
});
