# NPM

公司对于搭建本地私有npm库有如下要求：

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

## 常用工具配置

- npm 全局工具
  - npm
    - `npm list -g --depth=0`
    - `npm i -g xxx`
  - yarn `yarn global add xxx`
  - n 管理 nodejs 版本 `n list`
  - nrm 管理npm源（或镜像源）`nrm list`
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

## FAQ

h5_blade 老项目运行不起来，可能的原因

- `sudo npm i -g node-sass`

Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally

解决方案（h5_blade项目）

有说要清除npm cache，此处解决方案不明，在处理了npm cache 以及删除了~/.npm/_cacache 后，重新 npm i 好了（没有安装全局的node-sass），同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本
