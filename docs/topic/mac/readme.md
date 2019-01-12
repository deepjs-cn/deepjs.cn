# Mac 开发环境配置

## 常用配置

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
  - iTerm2 最好用的是分屏 `CMD+D`/`CMD+Shift+D`
- [tmux](https://www.cnblogs.com/kaiye/p/6275207.html) 终端复用
- Finder 搭配上 [`Go2Shell`](https://zipzapmac.com/Go2Shell) 插件，可以在目录中直接打开终端，且可指定终端为iTerm2。
  - Go2Shell默认没有设置界面，需要用命令行打开(隐藏的真深)
    - `open -a Go2Shell --args config`
  <!-- ![go2shell-config](../img/go2shell-config.png) -->
- 代理工具 [charles](https://www.charlesproxy.com/)
- 开机启动项管理
  - Mac 系统自带了开机启动项管理工具
    - 系统偏好设置 -> 用户与群组 -> 登陆项
  - [launchctl](https://www.jianshu.com/p/b65c1d339eec) 是一个统一的服务管理框架，启动、停止和管理守护进程、应用程序、进程和脚本。

## 其他

记录其他一些常用操作

- MAC查看端口占用情况，（port替换成端口号，比如6379）可以查看该端口被什么程序占用，并显示PID，方便KILL
  - `lsof -i tcp:port`
- 查看端口 `lsof -i -P | grep -i “listen"`
- 查找文件
  `find . -type d -iname 文件名`
- 新系统（macOS Sierra 10.12.X）加强了安全机制，默认不允许用户自行下载安装应用程序，只能从Mac App Store里安装应用。
  - 解决办法 `sudo spctl --master-disable`

参考：

- [十分钟学会 tmux](https://www.cnblogs.com/kaiye/p/6275207.html)
- [优雅地使用命令行：Tmux 终端复用](https://harttle.land/2015/11/06/tmux-startup.html)
