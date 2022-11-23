type DeepReadonly<T> = T extends Object ? T extends (...args: any) => any ? T : {
  readonly [key in keyof T]: DeepReadonly<T[key]>
} : T
