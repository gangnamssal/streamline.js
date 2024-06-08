import go from '../go/go';

type AnyFunction = (...args: any[]) => any;

type PipeFunction = <
  /**
   * @param 함수의 return type
   */
  R,
  /**
   * @param 함수의 parameter type
   */
  T extends AnyFunction = (...args: any[]) => any,
>(
  f: T,
  ...fns: ((arg: ReturnType<T>) => any)[]
) => (...args: Parameters<T>) => R;

const pipe: PipeFunction =
  (f, ...fs) =>
  (...args) =>
    go(f(...args), ...fs);

export default pipe;
