type Shift<T extends any[]> = T extends [any, ...infer A] ? A : []
