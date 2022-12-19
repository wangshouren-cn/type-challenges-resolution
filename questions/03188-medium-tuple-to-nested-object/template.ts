type TupleToNestedObject<T extends any[], U> = T extends [infer K extends keyof any, ...infer Rest] ? Record<K, TupleToNestedObject<Rest, U>> : U
