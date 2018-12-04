# JavaScript

官方名称 ECMAScript

## 模块规范

这些规范的目的都是为了 **JavaScript的模块化开发**，特别是在浏览器端的。目前这些规范的实现都能达成浏览器端模块化开发的目的。

- CommonJS: 用于服务器，node.js的[模块系统](http://nodejs.org/docs/latest/api/modules.html)，就是参照[CommonJS规范](http://wiki.commonjs.org/wiki/Modules/1.1)实现的。
  - 在CommonJS中，有一个全局性方法require()，用于加载模块。
- AMD规范: [异步模块定义](https://github.com/amdjs/amdjs-api/wiki/AMD) 用于浏览器
  - AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
  - [教程](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)
  - AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"
  - 采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
- CMD规范: [通用模块定义](https://github.com/seajs/seajs/issues/242)
  - CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
- UMD: [通用模块定义](https://github.com/umdjs/umd)
  - 既然CommonJs和AMD风格一样流行，似乎缺少一个统一的规范。
  - 支持两种风格的“通用”模式，于是通用模块规范（UMD）诞生了。
- ES6: [module](http://es6.ruanyifeng.com/#docs/module)
  - ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
  - CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。
  - 由于 ES6 模块是编译时加载，使得静态分析成为可能。
  - ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
  - 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。
- cjs: 即 CommonJS

参考：

- [AMD 与 CMD 的区别](https://www.zhihu.com/question/20351507)
- [SeaJS与RequireJS最大的区别](https://www.douban.com/note/283566440/)
- [Sea.js 和 RequireJS 的异同](https://github.com/seajs/seajs/issues/277)
  - 需翻墙 https://lifesinger.wordpress.com/2011/05/17/the-difference-between-seajs-and-requirejs/
    - RequireJS 遵循的是 [Modules/AMD](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition) 规范。
    - SeaJS 遵循的是 [Mdoules/Wrappings](http://wiki.commonjs.org/wiki/Modules/Wrappings) 规范的 define 形式。
    - AMD 规范在 CommonJS 社区争议很大，规范里太多 RequireJS 的影子。社区里不少人反感 RequireJS 打着 CommonJS 的口号，甚至建议 AMD 自立门户，比如最近的这篇讨论：[Split off AMD?](https://groups.google.com/forum/#!topic/commonjs/lqCWO8tMp48)
- [LABjs、RequireJS、SeaJS 哪个最好用？为什么？](https://www.zhihu.com/question/20342350)
- [YUI Modules 与 AMD/CMD，哪一种方式更好？](https://www.zhihu.com/question/21347409#answer-2323656)

http://es6.ruanyifeng.com/

## es.next

- https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/babel-preset-app#polyfills
- https://new.babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins-usage
- https://github.com/zloirock/core-js/tree/master/packages/core-js/modules

- `es6.array.iterator`
- `es6.promise`
- `es7.promise.finally`

## Promise

- https://hit-alibaba.github.io/interview/
- Event Loop
  - https://zhuanlan.zhihu.com/p/30744300?utm_source=wechat_session&utm_medium=social
  - https://github.com/dt-fe/weekly/issues/41

- https://github.com/dt-fe/weekly/blob/master/01.%E7%B2%BE%E8%AF%BB%20js%20%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95.md

## 教材

- https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000
- https://github.com/webcoding/learning-javascript
- [MDN Web API 接口](https://developer.mozilla.org/zh-CN/docs/Web/API)
