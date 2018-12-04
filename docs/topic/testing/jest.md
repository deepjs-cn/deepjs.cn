# Jest

```js
"jest": {
  "verbose": true,
  "notify": true,
  "testEnvironment": "node",
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
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
