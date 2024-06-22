import goPromise from './goPromise';

describe('goPromise', () => {
  it('goPromise', () => {
    expect(goPromise(1, a => a + 1)).toBe(2);
  });

  it('goPromise with promise', () => {
    const res = goPromise(Promise.resolve(1), a => a + 1);

    expect(res).resolves.toBe(2);
  });

  it('goPromise with promise and promise', () => {
    const res = goPromise(Promise.resolve(1), a => Promise.resolve(a + 1));

    expect(res).resolves.toBe(2);
  });
});
