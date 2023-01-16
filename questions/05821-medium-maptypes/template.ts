type GetMapToType<
  T,
  R,
  Type = R extends { mapFrom: T; mapTo: infer To } ? To : never
> = [Type] extends [never] ? T : Type;

type MapTypes<T, R> = {
  [key in keyof T]: GetMapToType<T[key], R>;
};
