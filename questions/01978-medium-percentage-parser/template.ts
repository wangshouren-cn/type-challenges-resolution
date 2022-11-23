type CheckPrefix<T> = T extends ('+' | '-') ? T : never
type CheckSuffix<T> = T extends `${infer P}%` ? [P, '%'] : [T, '']

type PercentageParser<A extends string> = A extends `${CheckPrefix<infer P>}${infer R}` ? [P, ...CheckSuffix<R>] : ['', ...CheckSuffix<A>]
