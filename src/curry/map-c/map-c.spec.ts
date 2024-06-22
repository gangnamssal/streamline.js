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

  it('promise', () => {
    const arr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

    const res = mapC((a: number) => a + 1, arr);

    expect(res).toEqual([Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)]);
  });

  it('map with go with promise', () => {
    const res = go(
      [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
      mapC((a: number) => a + 10),
    );

    expect(res).toEqual([Promise.resolve(11), Promise.resolve(12), Promise.resolve(13)]);
  });
});
