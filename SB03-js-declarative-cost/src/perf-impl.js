const { someTransform, someCalculation } = require('./common')

// Question:
// Consider the arr structure is like this,
// ```
//  const arr = [{
//     id: number,
//     name: string,
//     someNum: number,
//  }]
// ```
//
// You can assume the black-box functions are having this declaration,
// ```
// const someTransform = ({ someNum: number }) => number | null
// const someCalculation = (number) => number
// ```
//
// The possible size of array are in {1, 10, 100, 1000, 10000, 100000, 1000000}.

// Requirement:
// 1. apply a black-box function `someTransform`, which produce nullable value, on each value in `arr`
// 2. filter all null values
// 3. filter all duplicate values
// 4. apply a black-box function `someCalculation`, which produce a numeric value, on each non-null and unique value in `arr`
// 5. Sum all up
// 6. return the total sum
//
// Please complete the requirements in its order.

function fastest(arr) {
  // TODO: fastest implementation
  return null
}

function declarative(arr) {
  // TODO: declarative implementation
  return null
}

function declarativeOptimized(arr) {
  // TODO: declarativeOptimized implementation
  return null
}

module.exports = {
  fastest,
  declarative,
  declarativeOptimized,
}
