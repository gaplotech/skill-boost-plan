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

---

設立【技術躍升系列】主要為了提升本土開發者 Programming / Software Engineering 興趣及技術、一同擴闊本土開發者的視野，將自身累積嘅知識承傳落去，將技術要求的最低門檻一步步提升，從而提升 HKIT 的質素。

【技術躍升系列】將會每週不定時發佈 1 至 N 次技術題目或相關有助提升 Productivity 的分享，題目會以 Software Engineering 為重點，涵蓋日常的軟件開發陷阱、進階的語言技巧、Database Design、系統架構、Cloud Native

暫時所有題材及題目會新自擬定，並會集中於自己經驗或有興趣的方面，包括但不限於以下種類：

\#Git
\#Backend \#iOS \#Android #Web
\#Kotlin \#Swift \#Javascript \#Typescript \#Java \#Rust
\#DevOps \#Kubernetes
\#Concurrent \#HighThroughput \#DistributedSystem
\#MongoDB #Redis
\#DesignPattern

連自己都唔知可以堅持到幾耐，老土咁講，大家嘅支持就係唯一嘅推動力。
\#毋忘建立Gap撈Tech的初衷

\#此帖無人贊助 #歡迎冠名贊助
