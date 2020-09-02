【技術躍升系列】
試就下列 `arr` 的 Data Structure 及計算要求

```js
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
```

開發至少三個 Implementations 並乎合以下的陳迹 (可使用任可 js library)：

1. 開發你認為「最快」的 Implementation (`fastest`)
2. 使用 Declarative Programming 的技巧，開發你認為「最易讀」的 Implementation (`declarative`)
3. 承上題，試就 2. 所寫的 Implementation，嘗試優化至你認為「Declarative 最快」的 Implementation (`declarativeOptimized`)

Bonus: 嘗試在 Benchmark 之前估算 1, 2, 3 在不同 Array Size 下的性能差距！

\#技術躍升系列 \#javascript


## Getting Start

1. Fork and clone this project and install npm modules
```
cd SB03-js-declarative-cost
npm install
```

2. Complete your implementation in `SB03-js-declarative-cost/src/perf-impl.js`

3. Test the integrity
```
npm run test
```

4. Test the performance
```
npm run start
```

4. You could submit your pull request and ask for review and discussion before the answer release.
