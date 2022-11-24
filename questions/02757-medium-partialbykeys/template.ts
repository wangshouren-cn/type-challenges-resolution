// type PartialByKeys<T, U = keyof T> = 
//   Omit<Partial<Pick<T, U & keyof T>> & Omit<T, U & keyof T>, never>;
type PartialByKeys<T, K extends keyof T = keyof T> = Omit<Omit<T, K> & Partial<Pick<T, K>>, never>
