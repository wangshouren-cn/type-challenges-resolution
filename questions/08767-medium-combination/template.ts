type Combination<
  T extends string[],
  All = T[number],
  Item = All
> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never;

// type a = Combination<["foo", "bar", "baz"]>;

// type b = `R ${never}`;
