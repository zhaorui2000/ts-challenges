type MyReturnType<T extends Function> = T extends (...args: any) => infer P ? P : never;
