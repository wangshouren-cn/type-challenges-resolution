type LengthOfString<S extends string> = StringToArray<S>['length']
type StringToArray<S> = S extends `${infer T}${infer R}` ? [T, ...StringToArray<R>] : []
