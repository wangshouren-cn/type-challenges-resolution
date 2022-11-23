type StringToUnion<T extends string> = T extends `${infer K}${infer R}` ? (K | StringToUnion<R>) : never
