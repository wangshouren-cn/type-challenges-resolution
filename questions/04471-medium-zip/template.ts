type Zip<T extends any[], U extends any[]> = T extends [
  infer TI,
  ...infer TRest
]
  ? U extends [infer UI, ...infer URest]
    ? [[TI, UI], ...Zip<TRest, URest>]
    : []
  : [];
