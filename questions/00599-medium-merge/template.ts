type Merge<F, S> = {
    [FK in (keyof F | keyof S)]: FK extends keyof S ? S[FK] : FK extends keyof F ? F[FK] : never
}
