type Without<T, U extends any[] | any> = T extends [infer I, ...infer Rest]
  ? I extends (U extends any[] ? U[number] : U)
    ? [...Without<Rest, U>]
    : [I, ...Without<Rest, U>]
  : T;
type test = Without<[1, 2], 1>;
