type ConstructTuple<
  L extends number,
  R extends any[] = []
> = R["length"] extends L ? R : ConstructTuple<L, [unknown, ...R]>;
