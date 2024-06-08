import { go, pipe } from '../../strict';
import reduceC from './reduce-c';

describe('reduceC', () => {
  it('reduce with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go<number[]>(
      arr,
      reduceC((acc: number, a: number) => acc + a),
    );

    expect(res).toEqual(15);
  });

  it('reduce with pipe', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = pipe<number[]>(reduceC((acc: number, a: number) => acc + a));

    expect(res(arr)).toEqual(15);
  });
});
