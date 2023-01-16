type Chunk<
  A extends any[],
  Count,
  Temp extends any[] = []
> = Temp["length"] extends Count
  ? [Temp, ...Chunk<A, Count>]
  : A extends [infer U, ...infer Rest]
  ? Chunk<Rest, Count, [...Temp, U]>
  : Temp["length"] extends 0
  ? []
  : [Temp];
