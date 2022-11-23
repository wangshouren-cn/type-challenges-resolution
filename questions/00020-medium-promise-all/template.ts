declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [Key in keyof T]: T[Key] extends Promise<infer I> ? I : T[Key]
}>
