# 源码解析

[源代码](https://github.com/vuejs/vuex)

## 项目结构

```bash
├── helpers.js
├── index.esm.js
├── index.js
├── mixin.js
├── module
│   ├── module-collection.js
│   └── module.js
├── plugins
│   ├── devtool.js
│   └── logger.js
├── store.js
└── util.js
```

### 实现大纲

```js
class Store {
  constructor(options = {}) {
    // 初始化模块
    this._modules = new ModuleCollection(options)

    // 安装模块
    installModule(this, state, [], this._modules.root)

    // 初始化 store._vm
    resetStoreVM(this, state)
  }

  get state() {}
  set state(v) {}

  commit(_type, _payload, _options) {}
  dispatch(_type, _payload) {}

  subscribe(fn) {}
  subscribeAction(fn) {}
  watch(getter, cb, options) {}
  replaceState(state) {}

  registerModule(path, rawModule, options = {}) {}
  unregisterModule(path) {}

  hotUpdate(newOptions) { {}
  _withCommit(fn) {}
}

class ModuleCollection {
  constructor (rawRootModule) {
    this.register([], rawRootModule, false)
  }
  register(path, rawModule, runtime = true) {
    // forEach => addChild
  }
}

installModule(store, rootState, path, module, hot) {
  // makeLocalContext
  // forEach => getter Mutation Action Child
}
```

具体实现解析

## 安装

## Store 实例化

### 初始化模块

### 安装模块

### 初始化 store._vm

## 总结
