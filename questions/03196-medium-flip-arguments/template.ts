type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? (...args: ReverseArray<A>) => ReturnType<T> : never
type ReverseArray<A> = A extends [infer T, ...infer E] ? [...ReverseArray<E>, T] : A;

type add = ReverseArray<[1,2,3]>