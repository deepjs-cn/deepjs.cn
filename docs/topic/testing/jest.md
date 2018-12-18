# Jest

参考:

- [jest docs](https://jestjs.io/docs/en/getting-started)
  - [jest using es6 by babel-7](https://github.com/cloudyan/babel-7)
  - [using-babel](https://jestjs.io/docs/en/getting-started#using-babel)

其他:

```js
"jest": {
  "verbose": true,
  "notify": true,
  "testEnvironment": "node",
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "collectCoverage": true,
  "setupFiles": [
    "<rootDir>/scripts/testSetup.js"
  ],
  "testPathIgnorePatterns": [
    "/template/",
    "/packages/test/",
    "/temp/",
    "/scripts/",
    ".*.helper.js"
  ]
},
```
