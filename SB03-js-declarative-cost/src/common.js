const createArr = (size) =>
  new Array(size).fill(null).map((value, index) => ({
    id: index,
    name: 'SomeName' + index,
    // In this benchmark, we need stable duplicate elements for testing the distinct operation
    someNum: index % (size / 5),
  }))
const someTransform = (it) => (it.someNum % 2 ? it.someNum : null)
const someCalculation = (it) => it % 5

// arrSize and pre-computed answers
const answers = {
  _1: 0,
  _10: 1,
  _100: 20,
  _1000: 200,
  _10000: 2000,
  _100000: 20000,
  _1000000: 200000,
}

module.exports = {
  answers,
  createArr,
  someTransform,
  someCalculation,
}
