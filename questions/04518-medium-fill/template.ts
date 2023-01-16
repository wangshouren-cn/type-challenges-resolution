type Fill<
  T extends unknown[],
  Replacer,
  Start extends number = 0,
  End extends number = T["length"],
  Count extends any[] = [],
  Flag = Count["length"] extends Start ? true : false
> = Count["length"] extends End
  ? T
  : T extends [infer First, ...infer Rest]
  ? Flag extends true
    ? [Replacer, ...Fill<Rest, Replacer, Start, End, [...Count, 0], true>]
    : [First, ...Fill<Rest, Replacer, Start, End, [...Count, 0]>]
  : T;