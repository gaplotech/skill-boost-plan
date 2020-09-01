// Assume the arrSize are in [1, 10, 100, 1000, 10000, 100000, 1000000]
const arrSize = parseInt(process.env.ARR_SIZE)

if (!arrSize) {
  throw new Error('missing ARR_SIZE environment variable')
}

const arr = new Array(arrSize).fill(null).map((value, index) => ({
  id: index,
  name: 'SomeName' + index,
  // In this benchmark, we need:
  //  1. stable null elements
  //  2. stable duplicate elements
  someNum: index % 2 ? index % (arrSize / 5) : null,
}))

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
  arr,
  arrSize,
}
