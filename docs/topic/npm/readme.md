# NPM

- [官方 npm 文档](https://docs.npmjs.com/getting-started/what-is-npm)
- [阮一峰-npm模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)
- [调试技巧 - npm link](https://github.com/atian25/blog/issues/17)
- [Understanding npm-link](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557) 翻墙
- [如何挑选高质量的 Node.js 模块](https://github.com/atian25/blog/issues/19)
  - [node-modules](https://github.com/node-modules) 是国内很多 Node.js 大神维护的 Group，里面的模块都经受住大规模的应用考虑，标准化和质量都不错
- [为什么我不使用 shrinkwrap（lock）](https://zhuanlan.zhihu.com/p/22934066)
- [monorepo 新浪潮](https://juejin.im/entry/586f00bc128fe100580a6f78)
  - [用lerna-changelog 来梳理 changelog](https://github.com/lerna/lerna-changelog)
  - [使用 monorepo 结构，管理多个 repo(示例)](https://github.com/galaxybing/lerna-repos-init.git)

## 常见问题

- 开发 npm 包注意事项
- 开发 npm 包，相互间需要引用又处于开发阶段，如何配置调试最方便
- 发布 npm，不编译发布是否 OK（使用 es6源码）

## 常用工具配置

- npm
  - `npm list -g --depth=0`
  - `npm i -g xxx`
  - `npm uninstall -g xxx`
  - 安装最新版 `npm i npm@latest -g`
- yarn
  - `yarn global add xxx`
  - Yarn 升级 `curl --compressed -o- -L https://yarnpkg.com/install.sh | bash`
- n 管理 nodejs 版本
  - `sudo n list`
  - `sudo n use x.x.x`
- nrm 管理npm源（或镜像源）
  - `nrm ls`
  - `nrm use taobao`
- npx 一个npm包执行器
  - 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
  - 可以执行依赖包中的命令，安装完成自动运行
- 基于 nodejs 启动一个本地 http 服务
  - http-server `hs dist -p 8090 -o`
  - serve `serve dist -l 3040`
- npm-check 检查依赖库版本
  - `npm-check -ug`
- gh-pages 发布文件到 github 任意分支
  - 发布 dist 目录到 gh-pages 分支，附带message `${branchName}-${commitId}`
  - `gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)`
  - 可选参数
    - 发布到远程 `-r git@github.com:jskit/kit-admin.git`
    - 发布到分支 `-b newBranch`
- jsnice 反混淆 js
- pm2
- eslint
- babel-cli
- @vue/cli 初始化 vue 项目
- sinopia
- [lerna](https://lernajs.io/) 是一个优化使用git和npm管理多包存储库的工作流程的工具。

## npm 包发布流程

发布 npm 包的流程简述如下：

1. 如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。
2. 在本地登录 npm 帐号，在本地执行：

```bash
npm adduser
```

或者

```bash
npm login
```

3. 在已完成编写的 npm 包根目录下执行：

```bash
npm publish
npm unpublish xxx@x.x.x
```

::: tip 提示
两小时内，发布的包可以撤销，之后就不能撤销了。
:::

到此，npm 包就成功发布到 npm 平台了。

> PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。

## 关于私有 npm 库

::: warning 请注意
实际情况下，如果没有特别要求或安全限制，可以不考虑私有库，使用 npm 平台更稳定。
:::

一般情况，公司对于搭建本地私有npm库有如下要求：

- 私有包托管在内部服务器中
- 项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包
- 希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库
- 服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。
- 对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。

## cnpm VS sinopia

 -| cnpm | sinopia |
------ |:-----:| -----:
系统支持 | 非windows | 全系统
安装 | 复杂 | 简单
配置 | 较多，适合个性化需求较多的 | 较少
配置——修改默认镜像 | 不支持 | 支持
存储 | mysql | 文件格式，直观
服务托管 | 默认后台运行 | pm2, doker, forever
文档资料 | 较多 | 较少

### 到底谁比较好？

> 有言道：脱离业务场景谈解决方案，都是耍流氓。

- [企业私有 npm 服务器](https://www.jianshu.com/p/659fb418c9e3)
- [搭建公司私有npm仓库](https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md)
- [使用Sinopia搭建私有的npm仓库](https://segmentfault.com/a/1190000005790827)
- [How to run npm without sudo](http://www.competa.com/blog/how-to-run-npm-without-sudo/)

## FAQ

这里收集一些遇到的 npm 问题

- [npm 和 yarn 缓存策略对比](https://segmentfault.com/a/1190000009709213)
  - npm
    - npm cache add 主要是 npm 内部使用
    - npm cache clean 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数
    - npm cache verify 验证缓存数据的有效性和完整性，清理垃圾数据
  - yarn
    - yarn cache ls 列出当前缓存的包列表
    - yarn cache dir 显示缓存数据的目录
    - yarn cache clean 清除所有缓存数据

**升级npm 遇到错误**

`sudo npm i -g npm` 全局升级遇到错误

```bash
npm ERR! Unexpected end of input at 1:574411
npm ERR! 3.4","init-package-json":"~1.9.3","lockfile":"~1.0.1","lru-cache":"~4
npm ERR!
```

使用一下方法处理下缓存，之后再重新执行安装即可

`sudo npm cache verify -g`

**h5_blade 老项目运行不起来，可能的原因**

`sudo npm i -g node-sass` 报以下错误

Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally

解决方案（h5_blade项目）

有说要清除cache，此处解决方案不明，在使用 `npm cache clean --force` 删除了 ~/.npm/_cacache 后，重新 npm i 好了，同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本

以下为解决办法步骤（**不需要**安装全局的node-sass）

```bash
npm cache verify

# [清除缓存](https://docs.npmjs.com/cli/cache)
# rm -rf ~/.npm/_cacache
npm cache clean --force

# 删除当前项目下的 node_modules
rm -rf node_modules
sudo npm i -g node-gyp node-pre-gyp
npm i
```

报错 Install failed with Node v.10 due to upath@1.0.4 incompatibility

```bash
error upath@1.0.4: The engine "node" is incompatible with this module. Expected version ">=4 <=9". Got "10.14.1"
error Found incompatible module
```

解决方案

Instead, the proper solution is to delete `node_modules/`, `package-lock.json` & `yarn.lock` and run `yarn` install or `npm i` again.

<!-- ### list

org
  - jskit √
  - cloudai
  - appjs
  - deepjs √
  - kitjs
  - microjs
  - socjs
  - xmini √
  - xweb
  - x-app
  - x-mini
  - kitdocs √
  - xdocs √
- js-cli √ -->
