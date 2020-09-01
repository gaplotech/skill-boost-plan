【技術躍升系列】
試就下列 `arr` 的 Data Structure 及計算要求

```js

const arrSize = 1 // Assume the arrSize are in [1, 10, 100, 1000, 10000, 100000, 1000000]

const arr = new Array(arrSize).fill(null).map((value, index) => ({
  id: index,
  name: 'SomeName' + index,
  // In this benchmark, we need:
  //  1. stable null elements
  //  2. stable duplicate elements
  someNum: index % 2 ? index % (arrSize / 5) : null,
}))

// Requirement: Please calculate the sum of non-null and unique values of modular of `someNum` in `arr`.
```

開發至少三個 Implementations 並乎合以下的陳迹 (可使用任可 js library)：

1. 開發你認為「最快」的 Implementation
2. 使用 Declarative Programming 的技巧，開發你認為「最易讀」的 Implementation
3. 承上題，試就 2. 所寫的 Implementation，嘗試優化至你認為「Declarative 最快」的 Implementation

Bonus: 嘗試在跑分時估算 1, 2, 3 在不同 Array Size 下的性能差距！

\#技術躍升系列 \#javascript


## Getting Start

1. Fork and clone this project and install npm modules
```
cd SB03-js-declarative-cost
npm install
```

2. Complete your implementation in `SB03-js-declarative-cost/perf-impl.js`

3. Test the performance
```
ARR_SIZE=100 npm run start
```

4. You could submit your pull request and ask for review and discussion before the answer release.
