/**
 * infer
 * 1. 在 extends 条件语句中待推断的类型变量
 * 2. 提取函数类型的返回值类型
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never;
