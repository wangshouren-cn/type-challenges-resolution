type Trunc<V extends number | string> =
  `${V}` extends `${infer Left}${infer Right}`
    ? Left extends "."
      ? ""
      : `${Left}${Trunc<Right>}`
    : V;
