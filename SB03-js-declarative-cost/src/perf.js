const Benchmark = require('benchmark')
const assert = require('assert')
const { fastest, declarative, declarativeOptimized } = require('./perf-impl')
const { answers, arr, arrSize } = require('./common')

// assert the answer is correct before running the benchmark
const ans = answers[`_${arrSize}`]
assert.strictEqual(fastest(arr), ans)
assert.strictEqual(declarative(arr), ans)
assert.strictEqual(declarativeOptimized(arr), ans)

const suite = new Benchmark.Suite('Standard Array Processing')

suite
  .add('fastest', function () {
    fastest(arr)
  })
  .add('declarative', function () {
    declarative(arr)
  })
  .add('declarative-optimized', function () {
    declarativeOptimized(arr)
  })
  .on('start', function () {
    console.log(`${this.name} ARR_SIZE=${arrSize}`)
  })
  .on('cycle', function (event) {
    const currentBench = event.target
    console.log(String(currentBench))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ async: false })
