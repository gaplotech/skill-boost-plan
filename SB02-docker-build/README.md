###【技術躍升系列】SB02

這是一條關於 Docker Build 的情境題目，情境如下：

上司指派了小明建立一個 Next.js Application 的 POC，於

```bash
npx create-next-app
```

<🔊>
技術躍升 Online 大型 Gathering！
快啲去報名啦！➡️ https://go.aws/3hSdriE
資料由客戶提供：AWS 
</🔊>

建立了 Repository 後，小明希望可以 Containerize 這個 Application，於是 Google 了 `nextjs dockerfile`，找到一篇 Medium 的教學，他 Copy & Paste 整個 DockerFile

```dockerfile
FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./

RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
```

使用下列 Command 測試

```bash
docker build . -t next-app
docker run -d -p 3000:3000 next-app
```

測試過沒有問題之後就將 POC 交給上司，你作為上司替他 Code Review，請指出下列可以改善的地方。

![skill-boost-docker-build](https://gaplo.tech/content/images/2020/06/skill-boost-docker-build.png)

提示：
1. 可改善的地方多於一個
2. 重覆運行 `docker build . -t next-app` 會出現的問題

GitHub Repo: [https://github.com/gaplotech/skill-boost-plan](https://github.com/gaplotech/skill-boost-plan)

## 答案
<details>
  <summary>檢查答案</summary>
於兩日後公佈，歡迎接受挑戰
</details>
