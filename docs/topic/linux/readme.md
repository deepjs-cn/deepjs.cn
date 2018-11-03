# Linux

常用命令

- [一站式解决mac os 80端口占用问题](https://blog.csdn.net/u010256841/article/details/45219107)

- ls: illegal option -- -
  - 解决 MacOS 下 command: illegal option -- -
    - `brew install coreutils`
    - 环境变量添加 `export PATH="/usr/local/opt/coreutils/libexec/gnubin:$PATH"`
  - 参考
    - https://github.com/robbyrussell/oh-my-zsh/issues/5589
    - https://github.com/sorin-ionescu/prezto/issues/966#issuecomment-172003005
    - https://blog.bbzhh.com/index.php/archives/141.html
