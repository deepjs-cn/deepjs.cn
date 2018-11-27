# Mac 开发环境配置

- [brew](https://brew.sh/) - [homebrew](https://github.com/Homebrew/homebrew) 是mac下类似apt-get的软件管理工具
  - 参考 [brew 配置](./brew.html)
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
- 代理工具 [charles](https://www.charlesproxy.com/)

在 MacOSX 下可以用 launchctl 来管理这些服务(开机启动)。
