type AllCombinations<S, Chs extends string = Chars<S>> = 
    [Chs] extends [never] ? '' 
    : '' | {[K in Chs]: `${K}${AllCombinations<S, Exclude<Chs, K>>}`}[Chs]

type Chars<S> = S extends `${infer Char}${infer Rest}` ? (Char | Chars<Rest>) : '';

// type TestChars = Chars<'abc'>;

// type a2 = AllCombinations<'abc'>
