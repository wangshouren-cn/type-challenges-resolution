type Reverse<T> = T extends [infer I, ...infer A] ? [...Reverse<A>, I] : T;
