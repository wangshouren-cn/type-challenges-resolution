type Push<T, U> = T extends Array<any> ? [...T, U] : never

