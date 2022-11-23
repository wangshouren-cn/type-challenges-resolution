type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer I extends any[]) => any ? (...args: [...I, A]) => ReturnType<Fn> : never

