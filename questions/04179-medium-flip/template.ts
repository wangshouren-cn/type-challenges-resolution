type Flip<T> = {
    [K in (keyof T) as T[K] extends (boolean | string | number) ? `${T[K]}` : never] : K
}
