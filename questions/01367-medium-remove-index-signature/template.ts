// type RemoveIndexSignature<T> = {
//     [key in keyof T as key extends `${infer ConcreteKey}` ? ConcreteKey : never]: T[key]
// }

type RemoveIndexSignature<T, P=string | number | symbol> = {
    [K in keyof T as P extends K ? never : K extends P ? K : never ]: T[K]
}



