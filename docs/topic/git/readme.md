# Git

整理自 [https://github.com/webcoding/useGit]()

如果学习并测试 git 用法，可以使用示例 [Webtest](https://github.com/webcoding/webtest) 来测试学习。

## 文档

Pro Git 2

- English [https://git-scm.com/book/en/v2]()
- 中文版 [https://git-scm.com/book/zh/v2/]()

还可以参考一个比较全的教程[Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## 安装

### 客户端 [GUI](https://www.git-scm.com/downloads/guis/)

- [**推荐**]命令行 [https://www.git-scm.com/download/]()
- 图形化界面
  - Window - TortoiseGit [https://download.tortoisegit.org/tgit/]()
  - Mac - Sourcetree [https://www.sourcetreeapp.com/]()

## github操作指南

如果需要操作github，你可以参考[Git 与 github 操作指南](https://github.com/webcoding/useGit)

## 常用命令

- [**推荐**][Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- Git 常用命令图表——[思维导图-Git.png](http://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png)
- [Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

```bash
# clone
git clone {url} [newName]

# 别名
# 添加远程版本库的别名
git remote add <别名> <远程版本库的URL>

# 删除远程分支
git remote rm <别名>
```

## 配置别名

配置路径 `~/.gitconfig`

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

## 工作流

- [分布式-Git-分布式工作流程](git-scm.com/book/zh/v2/分布式-Git-分布式工作流程)
- [高效git工作流](https://juejin.im/post/5b2b76e251882574934c388d)
- [Git 工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
- [Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)

<!-- - 全局配置 git config
  - git config --global --list 查看全局配置
  - git config --global user.name "John Doe"
  - git config --global user.email johndoe@example.com
- 初始化 git init，在当前目录创建一个名为 .git 的文件夹
- .gitignore 文件，设置忽略的文件
- 添加新文件到版本库 git add
  - git add . 添加所有文件，包括子目录，但不包括空目录
  - git add xxx.js 添加单个文件
  - git add *.js 添加所有js文件
- 提交 git commit
  - git commit -am 'some msg' 提交所有修改
  - git commit -m 'add msg to xxx.js' xxx.js 提交单个文件
  - git commit -C head -a -amend 不会产生新的提交历史记录
- 撤销修改
  - 撤销尚未提交的修改
    - git checkout head readme.md todo.js 撤销1、2个文件
    - git checkout head *.js 撤销所有js文件
    - git checkout head . 撤销所有文件
  - 撤销提交
    - git revert --no-commit head 最近的一次提交的反操作
    - 复位
      - git reset head [filename] 取消暂存
      - git reset --hard head^^ 不会在版本库中留下痕迹
- 分支
  - git branch
  - git branch -a
  - git branch -r
  - git checkout [branchName] -->

## 常见问题

- 修改commit 日志 git commit --amend
- 撤销提交，撤销前一次，前N次
- 删除远程分支
- 拉取一个本地不存在的远程分支到本地
