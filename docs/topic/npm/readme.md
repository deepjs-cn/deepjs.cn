# NPM

- [搭建公司私有npm仓库](https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md)
- [How to run npm without sudo](http://www.competa.com/blog/how-to-run-npm-without-sudo/)

## 常用工具配置

- npm 全局工具
  - npm `npm i -g xxx`
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

npm list -g --depth=0

## FAQ

h5_blade 老项目运行不起来，可能的原因

- `sudo npm i -g node-sass`

Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally

解决方案（h5_blade项目）

有说要清除npm cache，此处解决方案不明，在处理了npm cache 以及删除了~/.npm/_cacache 后，重新 npm i 好了（没有安装全局的node-sass），同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本
