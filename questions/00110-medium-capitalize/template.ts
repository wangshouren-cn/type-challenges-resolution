type MyCapitalize<S extends string> = S extends `${infer I}${infer T}` ? `${Uppercase<I>}${T}` : S
