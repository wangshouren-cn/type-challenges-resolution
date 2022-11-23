type MyReadonly2<T, K extends keyof T = keyof T > = {
  [key in keyof Omit<T, K>]: T[key]
} & {
  readonly [key in K]: T[key]
}
