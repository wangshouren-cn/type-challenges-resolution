type IndexOf<T, U, Count extends any[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? import("@type-challenges/utils").Equal<First, U> extends true
    ? Count["length"]
    : IndexOf<Rest, U, [0, ...Count]>
  : -1;
