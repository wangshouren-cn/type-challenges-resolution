type Unshift<T, U> = T extends Array<any> ? [U, ...T] : never
