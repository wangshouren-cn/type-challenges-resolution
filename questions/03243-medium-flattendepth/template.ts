type FlattenDepth<A extends any[] , B extends number= 1, C extends any[] = []> = C["length"] extends B ?
    A
    :A extends [infer D, ...infer E] ? 
        D extends any[] ? 
            [...FlattenDepth<D, B, [...C, 1]>, ...FlattenDepth<E, B, [...C]>] 
            : [D, ...FlattenDepth<E, B, [...C]>] 
        : A
type a1 = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>