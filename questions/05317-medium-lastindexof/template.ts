type MyEqual<X, Y> = (<V>() => V extends X ? 1 : 2) extends <V>() => V extends Y
  ? 1
  : 2
  ? true
  : false;

type LastIndexOf<T extends any[], U> = T extends [...infer Rest, infer Last]
  ? MyEqual<Last, U> extends true
    ? Rest["length"]
    : LastIndexOf<Rest, U>
  : -1;
