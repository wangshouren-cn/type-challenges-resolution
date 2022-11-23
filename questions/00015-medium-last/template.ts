type Last<T extends any[]> = T extends [...any[], infer I] ? I : never

