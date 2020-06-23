【技術躍升系列】
這是一條我剛設計的 Typescript Generic Type 面試題目，請問以下 A 至 G 選項中哪一個會產生 Typescript type-check Error?

提示：答案多於一個並以 Typescript 3.8+ 為準

\#技術躍升系列 \#Typescript
```ts
class Foo {
    doSomething() {}
}

class Bar extends Foo {}

type SthType<T> = {
    [key in keyof T]: T[key] & Foo
}

// A
class Sth<T extends SthType<T>> {}

// B
new Sth<{ foo: Foo, bar: Bar }>()

// C
new Sth<{ foo: string, bar: Bar }>()

// D
new Sth<String>()

// E
new Sth<string>()

// F
new Sth<{}>()

// G
new Sth<object>()

```

## 答案
<details>
  <summary>檢查答案</summary>

```
C, D

C : 因為 `foo: string` not extends Foo
D : 因為 String interface 有 property, 而且一定唔係 Foo.
```

### 為什麼 E 不是？
```
E: 因為 string 係 primitive type 冇任何 key-value property，
  所以 type constraints 唔會對。而本身 string 係 compatible type to {}
```

</details>


## 承上題
如果呢個係一個 Bug，其實想令 E 都出 Type Check Error，可以點做？

<details>
  <summary>檢查答案</summary>

```ts
// Add `object`  
type SthType<T> = object & {
    [key in keyof T]: T[key] & Foo
}
```

</details>
