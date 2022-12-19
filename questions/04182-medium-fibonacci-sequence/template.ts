/**
 * 核心：用 数组长度 代替 数字
 */

type Fibonacci<T extends number, Prev extends any[] = [], Current extends any[] = [0], Index extends any[] = [0]> = 
    Index['length'] extends T ? 
        Current['length'] : 
        Fibonacci<T, Current, [...Prev, ...Current], [...Index, 0]>;

