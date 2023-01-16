type Include<T extends unknown[], U> = T extends [infer Head, ...infer Tail]
  ? MyEqual<Head, U> extends true
    ? true
    : Include<Tail, U>
  : false;

type Unique<T extends unknown[], R extends unknown[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Unique<Tail, Include<R, Head> extends true ? R : [...R, Head]>
  : R;
