type AnyOf<T extends readonly any[]> = T[number] extends FalseTypes ? false : true

type FalseTypes = false | 0 | { [key: string]: never } | [] | undefined | null | ''

