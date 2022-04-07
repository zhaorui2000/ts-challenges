type TupleToObject<T extends readonly (string |  number |  symbol)[]> = {
  [P in T[number]]: P extends string ? P : P extends number ? `${P}` : P extends symbol ? P : never;
}

