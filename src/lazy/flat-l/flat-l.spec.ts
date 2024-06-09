import flatL from './flat-l';

describe('flatL', () => {
  it('배열을 받았을 때', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect([...flatL(arr)]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('Deep flat', () => {
    const arr = [1, [2, 3], [[4], [5, 6]]];
    const iter = flatL<number>(arr);
    const res = [...iter];

    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Deep flat2', () => {
    const arr = [1, [2, 3], [[4], [5, 6]], [[[7]]], [8]];
    const iter = flatL<number>(arr);
    const res = [...iter];

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('일반 배열이 들어왔을 때', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const iter = flatL<number>(arr);
    const res = [...iter];

    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
