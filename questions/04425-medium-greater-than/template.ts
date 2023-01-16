type GreaterThan<
  X extends number,
  Y extends number,
  A1 extends number[] = [],
  A2 extends number[] = []
> = A1["length"] extends X
  ? // 走到这说明 A2 ， A1 一样长 => Y 比 X 相等
    false
  : A2["length"] extends Y
  ? // 走到这说明 A1 还没放完，A2 已经放完了 => A1 比 A2 长 => X 比 Y 大
    true
  : GreaterThan<X, Y, [...A1, 0], [...A2, 0]>;
