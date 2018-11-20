# Shell

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

方便好用的 bash shell 别名(可以 Google -> bash 别名)

- https://linux.cn/article-4585-1.html

```conf
# 解压 .tar 文件
alias untar='tar -zxvf '
# 想要下载的东西，但如果出现问题可以恢复吗？
alias wget='wget -c '
# 为新的网络帐户生成随机的 20 个字符的密码？
alias getpass="openssl rand -base64 20"
# 下载文件并需要测试校验和？
alias sha='shasum -a 256 '
# 限制五个 ping
alias ping='ping -c 5'
# 随地启动 web 服务器
# alias www='python -m SimpleHTTPServer 8000'
alias www='hs -p 8090 -o'
# 想知道你的网络有多快？只需下载 Speedtest-cli 并使用此别名即可。
# 你可以使用 speedtest-cli --list 命令选择离你所在位置更近的服务器。
alias speed='speedtest-cli --server 2406 --simple'
# 获取外部 IP 地址
alias ipe='curl ipinfo.io/ip'
# 需要知道你的本地 IP 地址？
alias ipi='ipconfig getifaddr en0'
# 清空屏幕
alias c='clear'
```
