type Pop<T extends any[]> = T extends [...infer I, any] ? I : T

