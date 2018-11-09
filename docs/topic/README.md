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

- [chrome](https://www.google.com/chrome/)
- [brew](https://brew.sh/) - [homebrew](https://github.com/Homebrew/homebrew) 是mac下类似apt-get的软件管理工具
  - 我们需要将 `/usr/local/bin` 添加到PATH路径的最前面，保证系统优先调用到的是brew下载的
  - 在命名行下输入 `:echo export PATH='/usr/local/bin:$PATH' >> ~/.bash_profile`
  - 也可以执行`brew doctor 来检测
- [zsh](https://ohmyz.sh/) 参考介绍[终极 Shell](https://zhuanlan.zhihu.com/p/19556676)
  - 安装 `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
  - 替换bash的方式 `chsh -s /bin/zsh`, 重启终端或执行 `source ~/.zshrc` 启用配置
  - 设置默认 shell `usermod -s /bin/zsh`
  - 查看当前 shell `echo $SHELL`
  - 配置实现自动跳转的插件
    - [z](https://github.com/rupa/z)
      - 无需安装，配置修改 `~/.zshrc`中 `plugins=(git z)` 即可
    - [autojump](https://github.com/joelthelion/autojump)
      - 安装 `brew install autojump`
      - 配置 `plugins=(git autojump)`
    - [fasd](https://github.com/clvv/fasd) 功能上和z, autojump差不多，功能和速度上更优
      - 安装 `brew install fasd`, 之后执行 `eval "$(fasd --init auto)"`
      - 配置 `plugins=(git fasd)`
- [iTerm2](https://iterm2.com/) 终端利器替代 terminal
- Finder 搭配上 [`Go2Shell`](https://zipzapmac.com/Go2Shell) 插件，可以在目录中直接打开终端，且可指定终端为iTerm2。
  - Go2Shell默认没有设置界面，需要用命令行打开(隐藏的真深) `open -a Go2Shell --args config`
  <!-- ![go2shell-config](../img/go2shell-config.png) -->
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
- 代理工具 [charles](https://www.charlesproxy.com/)
- [1Passward](https://itunes.apple.com/cn/app/1password-password-manager/id568903335?mt=8) Password Manager [完全指南](https://sspai.com/post/26877)

## 常用文档

- [微信小程序](https://mp.weixin.qq.com/debug/wxadoc/dev/api/) - [[管理平台](https://mp.weixin.qq.com)]
- [支付宝小程序](https://docs.alipay.com/mini/framework/app) - [[管理平台](https://openhome.alipay.com/platform/home.htm)]
