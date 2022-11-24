type RequiredByKeys<T, K extends keyof any = keyof T> = Omit<PickExclude<T, K> & Required<PickAndFilter<T, K>> , never>

type PickExclude<T, K> = Pick<T, Exclude<keyof T, K>>;
type PickAndFilter<T, K> = Pick<T, K extends keyof T ? K : never>;

type aa = RequiredByKeys<{
    name? : string
}, 'name' | 'unknown'>;