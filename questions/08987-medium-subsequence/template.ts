type Subsequence<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First, ...Subsequence<Rest>] | Subsequence<Rest>
  : [];
