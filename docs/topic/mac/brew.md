# brew

[brew](https://brew.sh/) - [homebrew](https://github.com/Homebrew/homebrew) 是mac下类似apt-get的软件管理工具

- 我们需要将 `/usr/local/bin` 添加到PATH路径的最前面，保证系统优先调用到的是brew下载的
- 在命名行下输入 `:echo export PATH='/usr/local/bin:$PATH' >> ~/.bash_profile`
- 也可以执行`brew doctor 来检测

**brew update 慢？**

来试试用 Coding 家的 Homebrew 源吧！( 该源每 5 分钟和上游同步一次，依托 Coding 遍布全国的 Git 服务节点（在 http://Coding.net push & pull 仓库代码的速度也是同样的快），让你的 brew update 更快！）

```bash
cd "$(brew --repo)" && git remote set-url origin https://git.coding.net/homebrew/homebrew.git`
cd $home && brew update
```

其他常用操作

- `brew update` 升级brew的版本库
- `brew outdated` 查看outdated的库和应用
- `brew upgrade` 升级outdated的库和应用
- `brew cleanup` 清理调过期的库和应用
