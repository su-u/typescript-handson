# typescript-handson

## GitPod
先頭に入力するURL
```
https://gitpod.io/#
```

## インストール
nodejs v12.16.3前提
```
npm init -y
npm install -D typescript@3.9.2
./node_modules/.bin/tsc --init
```

## jsの実行
```
node ./src/sample1.js
```


## tsの実行1
```
./node_modules/.bin/tsc ./src/sample2.ts
node ./src/samle2.js
```

## tsの実行2
```
npm install ts-node@8.10.1
./node_modules/.bin/ts-node ./src/sample2.ts
```