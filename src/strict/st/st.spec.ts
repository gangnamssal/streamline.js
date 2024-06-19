import st from './st';
import * as _ from '..';
import * as C from '../../curry';

describe('st', () => {
  it('st at', () => {
    const res = st([1, 2, 3, 4, 5]).at(2);

    expect(res).toEqual(3);
  });

  it('st chunk', () => {
    const res = st([1, 2, 3, 4, 5]).chunk(2).iter;

    expect(res).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('st concat', () => {
    const res = st([1, 2, 3, 4, 5]).concat([6, 7, 8, 9, 10]).iter;

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('st drop', () => {
    const res = st([1, 2, 3, 4, 5]).drop(2).iter;

    expect(res).toEqual([3, 4, 5]);
  });

  it('st every', () => {
    const res = st([1, 2, 3, 4, 5]).every(v => v > 0);

    expect(res).toBeTruthy();
  });

  it('st filter', () => {
    const res = st([1, 2, 3, 4, 5]).filter(v => v % 2 === 0).iter;

    expect(res).toEqual([2, 4]);
  });

  it('st find', () => {
    const res = st([1, 2, 3, 4, 5]).find(v => v === 3);

    expect(res).toEqual(3);
  });

  it('st findIndex', () => {
    const res = st([1, 2, 3, 4, 5]).findIndex(3);

    expect(res).toEqual(2);
  });

  it('st flat', () => {
    const res = st([1, 2, [3, 4], 5]).flat().iter;

    expect(res).toEqual([1, 2, 3, 4, 5]);
  });

  it('st join', () => {
    const res = st([1, 2, 3, 4, 5]).join();

    expect(res).toEqual('1,2,3,4,5');
  });

  it('st map', () => {
    const res = st([1, 2, 3, 4, 5]).map(v => v * 2).iter;

    expect(res).toEqual([2, 4, 6, 8, 10]);
  });

  it('st reduce', () => {
    const res = st([1, 2, 3, 4, 5]).reduce((acc, v) => acc + v, 0);

    expect(res).toEqual(15);
  });

  it('st some', () => {
    const res = st([1, 2, 3, 4, 5]).some(v => v > 4);

    expect(res).toBeTruthy();
  });

  it('st zip', () => {
    const res = st([1, 2, 3, 4, 5]).zip([6, 7, 8, 9, 10]).iter;

    expect(res).toEqual([
      [1, 6],
      [2, 7],
      [3, 8],
      [4, 9],
      [5, 10],
    ]);
  });

  it('st to', () => {
    const res = st([1, 2, 3, 4, 5]).to(iter => [...iter]);

    expect(res).toEqual([1, 2, 3, 4, 5]);
  });

  it('st to2', () => {
    const res = st([1, 2, 3, 4, 5]).to(C.mapC((v: number) => v));

    expect(res).toEqual([1, 2, 3, 4, 5]);
  });

  it('st chaining', () => {
    const res = st(_.range(1, 5))
      .filter(v => v % 2 === 0)
      .map(v => v * 2)
      .reduce((acc, v) => acc + v, 0);

    expect(res).toEqual(12);
  });

  it('st chaining2', () => {
    const res = st(_.range(1, 5))
      .filter(v => v % 2 === 0)
      .map(v => v * 2)
      .to(C.mapC((v: number) => v));

    expect(res).toEqual([4, 8]);
  });

  it('st chaining3', () => {
    const res = st(_.range(1, 5))
      .filter(v => v % 2 === 0)
      .map(v => v * 2)
      .to(_.takeAll);

    expect(res).toEqual([4, 8]);
  });

  it('st chaining4', () => {
    const res = st(_.range(1, 5))
      .filter(v => v % 2 === 0)
      .map(v => v * 2)
      .at(-1);

    expect(res).toEqual(8);
  });
});
