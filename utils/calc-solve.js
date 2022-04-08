function calcSolve(arr) {
  const result = {warm: 0, easy: 0, medium: 0, hard: 0, extrem: 0}
  for (const item of arr) {
    item.replace(/(?<=-)[^-]+/g, (str) => {
      if (str in result) {
        ++result[str]
      }
    })
  }
  return result;
}

module.exports = calcSolve

