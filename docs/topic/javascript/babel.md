# Babel

- [babeljs.io](https://babeljs.io/)
- [babeljs 中文](https://babel.docschina.org/)
- [babel 7 教程](https://blog.zfanw.com/babel-js/)

- Babel 6: loose模式
  - [Babel 6: loose模式](https://www.w3ctech.com/topic/1708)
  - [Babel 6 松散模式](https://csspod.com/babel6-loose-mode/)

- CodeRunner
  - TODO: VSCode 内右键执行 ES6 语法
```js
// vscode config

// codeRunner 需要全局安装一下模块
// sudo npm i eslint @babel/cli @babel/node @babel/preset-env prettier -g
// Error: Cannot find module '@babel/preset-env' from '/usr/local/lib'
"code-runner.defaultLanguage": "javascript",
// "code-runner.cwd": "/usr/local/lib/",
"code-runner.executorMap": {
  // "vue": "babel-node --presets stage-2",
  "vue": "babel-node",
  // babel 6
  // "javascript": "babel-node --presets=stage-2",
  // babel 7
  "javascript": "npx babel-node --presets @babel/preset-env",
  "md": "babel-node"
},
```

babel.config.js 配置

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'cjs',
      },
    ],
    // 'es2015',
    // '@babel/preset-stage-2',
    // '@babel/preset-typescript',
  ],
  plugins: [
    // '@babel/runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
      },
    ],
    // https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from
    '@babel/plugin-proposal-export-default-from',
    // https://babeljs.io/docs/en/babel-helper-module-imports
    // '@babel/helper-module-imports',
    // https://www.npmjs.com/package/babel-plugin-add-module-exports
    'add-module-exports',
  ],
  env: {
    production: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};

```
