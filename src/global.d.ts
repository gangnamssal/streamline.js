export type KeyOfArray<T> = T extends [infer K, ...infer P] | readonly [infer K, ...infer P]
  ? P['length'] extends 0
    ? K
    : K | KeyOfArray<P>
  : never;
