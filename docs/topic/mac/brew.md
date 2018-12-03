# brew

[brew](https://brew.sh/) - [homebrew](https://github.com/Homebrew/homebrew) 是mac上类似apt-get的软件管理工具

- 我们需要将 `/usr/local/bin` 添加到PATH路径的最前面，保证系统优先调用到的是brew下载的
- 在命名行下输入 `:echo export PATH='/usr/local/bin:$PATH' >> ~/.bash_profile`
- 也可以执行`brew doctor 来检测

## install mongodb

- `brew install mongodb`
- 查看信息 `brew info mongodb`
- `brew services start mongodb`

**brew update 慢？**

解决办法: 更换镜像源。

::: tip
注意，如果你按照让 [让 Homebrew 走代理更新](https://www.logcg.com/archives/1617.html) 这篇文章来操作了，那你就没有必要切换镜像源，因为已经全局代理了，否则的话会导致brew无法更新——因为国外也不能轻易访问国内的。
:::

```bash
cd "$(brew --repo)"

# coding.net(推荐)
git remote set-url origin https://git.coding.net/homebrew/homebrew.git
# 清华镜像源
# git remote set-url origin git://mirrors.tuna.tsinghua.edu.cn/homebrew.git
# 中科大镜像源
# git remote set-url origin http://mirrors.ustc.edu.cn/homebrew.git

cd $home
brew update
```

其他常用操作

- `brew update` 升级brew的版本库
- `brew outdated` 查看outdated的库和应用
- `brew upgrade` 升级outdated的库和应用
- `brew cleanup` 清理调过期的库和应用

参考：

- [brew update 慢? 解决办法: 更换镜像源](https://my.oschina.net/boltwu/blog/651633)
- [让 Homebrew 走代理更新](https://www.logcg.com/archives/1617.html)
