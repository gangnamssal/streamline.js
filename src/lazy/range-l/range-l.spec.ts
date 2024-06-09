import take from '../../strict/take/take';
import rangeL from './range-l';

describe('rangeL', () => {
  it('start만 주어졌을 때', () => {
    const result = take(5, rangeL(3));
    expect(result).toEqual([0, 1, 2]);
  });

  it('start, stop만 주어졌을 때', () => {
    const result = take(5, rangeL(3, 8));
    expect(result).toEqual([3, 4, 5, 6, 7]);
  });

  it('start, stop, step이 주어졌을 때', () => {
    const result = take(5, rangeL(3, 8, 2));
    expect(result).toEqual([3, 5, 7]);
  });

  it('start, stop, step이 음수일 때', () => {
    const result = take(5, rangeL(8, 3, -2));
    expect(result).toEqual([8, 6, 4]);
  });

  it('start가 stop보다 크고 step이 양수일 때', () => {
    const result = take(5, rangeL(8, 3, 2));
    expect(result).toEqual([8, 6, 4]);
  });

  it('step이 부동소수가 될 때', () => {
    const result = take(5, rangeL(8, 7, 2));
    expect(result).toEqual([8]);
  });
});
