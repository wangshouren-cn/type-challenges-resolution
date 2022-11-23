type Spaces = '\n' | '\t' | ' '

type Trim<S extends string> = S extends `${Spaces}${infer R}` | `${infer R}${Spaces}` ? Trim<R> : S

