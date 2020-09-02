const { fastest, declarative, declarativeOptimized } = require('./perf-impl')
const { answers, createArr } = require('./common')

for (const size of [1, 10, 100, 1000, 10000, 100000, 1000000]) {
  describe(`test when arrSize=${size}`, () => {
    const arr = createArr(size)
    test('fastest', () => {
      expect(fastest(arr)).toBe(answers[`_${size}`])
    })

    test('declarative', () => {
      expect(declarative(arr)).toBe(answers[`_${size}`])
    })

    test('declarativeOptimized', () => {
      expect(declarativeOptimized(arr)).toBe(answers[`_${size}`])
    })
  })
}
