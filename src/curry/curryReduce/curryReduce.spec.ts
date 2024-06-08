import { go, pipe } from '../../strict';
import curryReduce from './curryReduce';

describe('curryReduce', () => {
  it('reduce with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go<number[]>(
      arr,
      curryReduce((acc: number, a: number) => acc + a),
    );

    expect(res).toEqual(15);
  });

  it('reduce with pipe', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = pipe<number[]>(curryReduce((acc: number, a: number) => acc + a));

    expect(res(arr)).toEqual(15);
  });
});
