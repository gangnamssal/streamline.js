import { go, pipe } from '../../strict';
import mapC from './map-c';

describe('mapC', () => {
  it('map with go', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = go<number[]>(
      arr,
      mapC((a: number) => a + 1),
    );

    expect(res).toEqual([2, 3, 4, 5, 6]);
  });

  it('map with pipe', () => {
    const arr = [1, 2, 3, 4, 5];

    const res = pipe(mapC((a: number) => a + 1));

    expect(res(arr)).toEqual([2, 3, 4, 5, 6]);
  });
});
