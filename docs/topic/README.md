# 介绍

这是一个针对开发者的知识文档库。把开发生活中的点点滴滴记录下来，正所谓好记性不如烂笔头，也方便后期不时翻阅查找，同时也能共享给朋友参阅。

## 开发者指南

方便快捷的完成开发环境以及工具配置，能极大的提高开发效率。这已经是程序员所必须要具备的素质。以下配置作为参考：

## 工作环境

以下是一些常见的平台，供参考：

- 通信工具
  - [钉钉](https://im.dingtalk.com/)
  - QQ/Wechat
- 协作平台
  - [Tower](https://tower.im/)
  - [worktile](https://my.worktile.com)
- 代码库-[gitlab](https://about.gitlab.com/)
- web代码部署工具-[walle](https://github.com/meolu/walle-web)

## 开发环境及配置

要有一台好的电脑，推荐 Mac，Mac 系统自带了 gcc, g++, ruby, python的环境，此外还需要安装 nodejs, git等

Mac 参考 [Mac 开发环境配置](./mac/readme.md)

- [chrome](https://www.google.com/chrome/)
- [git](https://git-scm.com/) 图形化工具-[sourceTree](https://www.sourcetreeapp.com/)
  - 开发项目，填写有效的commit 信息
  - 提交代码，需要经过 codereview 代码审核
  - 发布上线一律从 release 分支发布
  - 简化 git 命令，修改配置 `~/.gitconfig`
```conf
[alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    lg = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
    type = cat-file -t
    dump = cat-file -p
    mg = merge --no-ff
```
- [vscode](https://code.visualstudio.com/)
  - 安装插件 setting sync, 填写 token
  - 修改配置 `command + ,` sync.gist `7c2cd3656a94330e015f805ffaa3dc17`
  - 下载 sync 配置
  - 等待安装组件后重启vscode
- [NodeJs](https://nodejs.org/en/)
- npm 安装管理依赖，**我们项目使用yarn** `npm i -g yarn`
  - 比较好且常用的 npm 包
  - n 管理 nodejs 版本 `n list`
  - nrm 管理npm源（或镜像源）`nrm list`
  - http-server 使用 nodejs随时开启一个 http 服务
- [1Passward](https://itunes.apple.com/cn/app/1password-password-manager/id568903335?mt=8) Password Manager [完全指南](https://sspai.com/post/26877)

## 常用文档

- [微信小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/api/) - [[管理平台](https://mp.weixin.qq.com)]
- [支付宝小程序](https://docs.alipay.com/mini/framework/app) - [[管理平台](https://openhome.alipay.com/platform/home.htm)]
