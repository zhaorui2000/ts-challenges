// T为联合类型的时候，它会自动分发条件。
type MyExclude<T, U> = T extends U ? never : T;
type cases = [ Exclude<"a" | "b" | "c", "e">];
