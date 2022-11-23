type ReplaceAll<S extends string, From extends string, To extends string> =
    From extends '' ?
      S : (S extends `${infer Left}${From}${infer Right}` ?
        `${ReplaceAll<Left, From, To>}${To}${ReplaceAll<Right, From, To>}` : S)
