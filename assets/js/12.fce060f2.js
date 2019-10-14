(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{137:function(t,e,s){t.exports=s.p+"assets/img/2015120901.3bc9d5f2.png"},225:function(t,e,s){t.exports=s.p+"assets/img/my-gitflow.9a813aa6.png"},425:function(t,e,s){"use strict";s.r(e);var a=s(7),n=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git","aria-hidden":"true"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("p",[t._v("整理自 "),a("a",{attrs:{href:"https://github.com/webcoding/useGit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/webcoding/useGit"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果学习并测试 git 用法，可以使用示例 "),a("a",{attrs:{href:"https://github.com/webcoding/webtest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webtest"),a("OutboundLink")],1),t._v(" 来测试学习。")]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[t._v("如何"),a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85"}},[t._v("安装")]),t._v("？")]),t._v(" "),a("li",[t._v("推荐的常用配置？")]),t._v(" "),a("li",[t._v("常见的操作有哪些？")]),t._v(" "),a("li",[t._v("如何撤销前一次操作或提交？如果 N 次呢？\n"),a("ul",[a("li",[a("code",[t._v("git add")])]),t._v(" "),a("li",[a("code",[t._v("git commit")])]),t._v(" "),a("li",[a("code",[t._v("git push")])])])]),t._v(" "),a("li",[t._v("如何更改刚提交的commit 日志\n"),a("ul",[a("li",[a("code",[t._v("git commit --amend")])])])]),t._v(" "),a("li",[t._v("如何撤销提交，撤销前一次，前N次")]),t._v(" "),a("li",[t._v("如何删除远程分支，如何快捷的批量删除？")]),t._v(" "),a("li",[t._v("如何拉取一个本地不存在的远程分支到本地\n"),a("ul",[a("li",[a("code",[t._v("git fetch origin dev")])]),t._v(" "),a("li",[a("code",[t._v("git fetch origin 远程分支名x:本地分支名x")])]),t._v(" "),a("li",[a("code",[t._v("git checkout -b 本地分支名x origin/远程分支名x")])]),t._v(" "),a("li",[a("code",[t._v("git branch -vv")])])])]),t._v(" "),a("li",[t._v("合并分支，是否保留具体日志记录 "),a("code",[t._v("git merge --no-ff")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A4%9A%E8%B4%A6%E5%8F%B7%E9%85%8D%E7%BD%AE%E9%97%AE%E9%A2%98"}},[t._v("如何绑定多个账号，多个 github、gitlab 等账户并存?")])]),t._v(" "),a("li",[t._v("git无法pull仓库refusing to merge unrelated histories(git 项目A，提交到 git 项目 B上，无法 pull)\n"),a("ul",[a("li",[t._v("如果合并了两个不同的开始提交的仓库，在新的 git 会发现这两个仓库可能不是同一个，为了防止开发者上传错误，于是就给下面的提示")]),t._v(" "),a("li",[a("code",[t._v("fatal: refusing to merge unrelated histories")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lindexi_gd/article/details/52554159",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方法"),a("OutboundLink")],1),t._v(" 如下")]),t._v(" "),a("li",[a("code",[t._v("git pull <remote-url> --allow-unrelated-histories")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://lindexi.gitee.io/post/git-%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%841000%E4%B8%AA%E9%97%AE%E9%A2%98.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 需要知道的1000个问题"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("在.gitignore中添加规则无效解决办法\n"),a("ul",[a("li",[t._v("实际是已经跟踪的文件，后添加规则，此时才无效。")]),t._v(" "),a("li",[t._v("解决办法：可以使用如下方式，让git重新对文件进行跟踪")]),t._v(" "),a("li",[a("code",[t._v("git rm -rf --cached .")])]),t._v(" "),a("li",[a("code",[t._v("git add .\\")])])])])]),t._v(" "),a("p",[t._v("高效实用操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 批量删除本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D hotfix log "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除已合并分支呢，删除已合并到 release 的分支呢")]),t._v("\n")])])]),a("h3",{attrs:{id:"知识扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 知识扩展")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/topic/git/commit-message.html"}},[t._v("Commit message 和 Change log 编写指南")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/10/git-internals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 原理入门"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),a("p",[t._v("Pro Git 2")]),t._v(" "),a("ul",[a("li",[t._v("English "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/book/en/v2"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("["),a("strong",[t._v("强烈推荐")]),t._v("]中文版 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/book/zh/v2/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("还可以参考一个比较全的教程")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/geeeeeeeeek/git-recipes/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-recipes"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.yiibai.com/git/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git教程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),a("p",[t._v("强烈推荐使用命令行操作，可以配合一个图形化界面偶尔做对比代码或查看历史使用")]),t._v(" "),a("ul",[a("li",[t._v("["),a("strong",[t._v("推荐")]),t._v("]命令行 "),a("a",{attrs:{href:"https://www.git-scm.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.git-scm.com/download/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("图形化界面\n"),a("ul",[a("li",[t._v("几乎所有的 "),a("a",{attrs:{href:"https://www.git-scm.com/downloads/guis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GUI Clients"),a("OutboundLink")],1),t._v("，以下推荐两款")]),t._v(" "),a("li",[t._v("Window - TortoiseGit "),a("a",{attrs:{href:"https://download.tortoisegit.org/tgit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://download.tortoisegit.org/tgit/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Mac - Sourcetree "),a("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.sourcetreeapp.com/"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"github操作指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github操作指南","aria-hidden":"true"}},[t._v("#")]),t._v(" github操作指南")]),t._v(" "),a("p",[t._v("如果需要操作github，你可以参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/webcoding/useGit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 与 github 操作指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/webcoding/useGit#%E5%9B%BE%E5%BD%A2%E5%8C%96%E8%BD%AF%E4%BB%B6tortoisegit%E4%B8%8Egithub%E7%BD%91%E7%AB%99%E5%85%B3%E8%81%94",target:"_blank",rel:"noopener noreferrer"}},[t._v("图形化软件TortoiseGit与github网站关联"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"多账号配置问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多账号配置问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 多账号配置问题")]),t._v(" "),a("p",[t._v("令不同 Host 实际映射到同一 HostName，但密钥文件不同。Host 前缀可自定义如xxx。配置文件 "),a("code",[t._v(".ssh/config")]),t._v("，")]),t._v(" "),a("p",[t._v("如果是 Windows，配置为 "),a("code",[t._v("C:\\Program Files\\Git\\etc\\ssh\\ssh_config")])]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 配置示例\n# 该文件用于配置私钥对应的服务器\n\n# test\n# 测试github\n# ssh -T git@github.com\n# 测试oschina\n# ssh -T git@git.oschina.net\n\n# Default github user(xxx1@qq.com)\n# HostName 这个是真实的域名地址\nHost git@github.com\n  HostName https://github.com\n  User cloudyan\n  IdentityFile ~/.ssh/id_rsa\n  # Port 22\n  # IdentityFile C:\\\\Users\\\\Alice\\\\.ssh\\\\id_rsa\n\n# second user(xxx2@qq.com)\n# 建一个github别名，新建的帐号使用这个别名做克隆和更新\nHost git@github.com\n  HostName https://github.com\n  User yue\n  IdentityFile ~/.ssh/yue_rsa\n\n# 公司的gitlab\nHost git@gitlab.iqianggou.com\n  HostName https://gitlab.iqianggou.com\n  User git\n  IdentityFile ~/.ssh/id_rsa\n\n# 配置示例\n# Host git@github.com\n#   HostName https://github.com\n#   User cloudyan\n#   IdentityFile ~/.ssh/id_rsa\n#   # Port 22\n#   # IdentityFile C:\\\\Users\\\\Alice\\\\.ssh\\\\id_rsa\n#   # PreferredAuthentications\n\n# 说明\n# HostName      这个是真实的域名地址\n# User          配置使用用户名\n# IdentityFile  这里是id_rsa的地址\n# PreferredAuthentications 配置登录时用什么权限认证--可设为 publickey,password publickey,keyboard-interactive等\n")])])]),a("p",[t._v("这种情况下，需要几点注意")]),t._v(" "),a("p",[t._v("remote pull push的时候有问题，因为要设置邮箱问题了 pull的时候识别的是邮箱，2个github账号，2个邮箱，我们自然不能使用global的user.email了")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消global")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset user.name\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset user.email\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置每个项目repo的自己的user.email")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx1@qq.com"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudyan"')]),t._v("\n")])])]),a("p",[t._v("之后push pull就木有问题了")]),t._v(" "),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("p",[t._v("生成ssh key")]),t._v(" "),a("p",[a("code",[t._v('ssh-keygen -m rsa -C "your mail"')]),t._v(" （当前目录） 然后可以命名默认id_rsa 或者id_rsa_second 把对应的pub放到公共服务器上。")]),t._v(" "),a("h2",{attrs:{id:"配置别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置别名")]),t._v(" "),a("p",[t._v("为了操作更为简单便捷，可以配置别名，对应配置文件 "),a("code",[t._v("~/.gitconfig")])]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[alias]\n  co = checkout\n  ci = commit\n  st = status\n  br = branch\n  lg = log --pretty=format:\\"%h %ad | %s%d [%an]\\" --graph --date=short\n  type = cat-file -t\n  dump = cat-file -p\n  mg = merge --no-ff\n\n# git clone一个github上的仓库，太慢，经常连接失败\n# 但是github官网流畅访问，为什么？\n# https://www.zhihu.com/question/27159393\n$ code ~/.gitconfig\n')])])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("ul",[a("li",[t._v("["),a("strong",[t._v("推荐")]),t._v("]"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 命令清单"),a("OutboundLink")],1),t._v("以下有整理")]),t._v(" "),a("li",[t._v("Git 常用命令图表——"),a("a",{attrs:{href:"http://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("思维导图-Git.png"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/06/git_remote.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git远程操作详解"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("一般掌握下图的概念以及这几个命令，普通操作够用了")]),t._v(" "),a("p",[a("img",{attrs:{src:s(137),alt:"Git 命令清单"}}),t._v("\n图：阮一峰")]),t._v(" "),a("p",[t._v("你必须要了解的概念：")]),t._v(" "),a("ul",[a("li",[t._v("Workspace：工作区")]),t._v(" "),a("li",[t._v("Index / Stage：暂存区")]),t._v(" "),a("li",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),a("li",[t._v("Remote：远程仓库")])]),t._v(" "),a("p",[t._v("最常用的命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone/fetch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some msg'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("而要熟练使用，就要掌握更多的命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alias.st status\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add xxx.file\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file msg'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab codereview 后，经常删除了远程分支，但本地还存在 remote-tracking")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如何批量删除跟踪?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deleted remote-tracking branch origin/xxx (was 141f40c).")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -rd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote/xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅仅删除远程跟踪")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("remote-xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --tags\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new-branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch/pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("xxx.file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--hard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/geeeeeeeeek/git-recipes/wiki/5.2-%E4%BB%A3%E7%A0%81%E5%9B%9E%E6%BB%9A%EF%BC%9AReset%E3%80%81Checkout%E3%80%81Revert-%E7%9A%84%E9%80%89%E6%8B%A9")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存区中删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"关于-head-和-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-head-和-head","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 "),a("code",[t._v("HEAD^")]),t._v(" 和 "),a("code",[t._v("HEAD~")])]),t._v(" "),a("p",[t._v("首先，Git 提交可以有多个父级，使用 "),a("code",[t._v("^")]),t._v(" 你可以找到任何提交的父级，而不仅仅是HEAD。你也可以追溯到几代人，使用 "),a("code",[t._v("~")]),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("HEAD^ 表示当前分支的提交的第一个父级，是 HEAD^1 的缩写")]),t._v(" "),a("li",[t._v("HEAD~ 意味着主分支的祖父母，在歧义的情况下支持第一个父母")]),t._v(" "),a("li",[t._v("这些说明符可以被任意连接，例如，topic~3^2。")]),t._v(" "),a("li",[t._v("而HEAD@{2}变量捕获HEAD运动的历史，用于git reflog或git stash list")])]),t._v(" "),a("p",[t._v("为了有一个直观的表示，让我们引用"),a("a",{attrs:{href:"http://schacon.github.io/git/git-rev-parse#_specifying_revisions",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("的一部分：")]),t._v(" "),a("blockquote",[a("p",[t._v("以下是Jon Loeliger的插图。\n提交节点B和C都是提交节点A的父节点。父提交从左到右排序。")])]),t._v(" "),a("div",{staticClass:"language-code extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("G   H   I   J\n \\ /     \\ /\n  D   E   F\n   \\  |  / \\\n    \\ | /   |\n     \\|/    |\n      B     C\n       \\   /\n        \\ /\n         A\n\nA =      = A^0\nB = A^   = A^1     = A~1\nC = A^2  = A^2\nD = A^^  = A^1^1   = A~2\nE = B^2  = A^^2\nF = B^3  = A^^3\nG = A^^^ = A^1^1^1 = A~3\nH = D^2  = B^^2    = A^^^2  = A~2^2\nI = F^   = B^3^    = A^^3^\nJ = F^2  = B^3^2   = A^^3^2\n")])])]),a("h2",{attrs:{id:"工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作流")]),t._v(" "),a("p",[t._v("工作流英文名称叫做“workflow”，高效的工作流能像流水一样让这个工作体验顺畅且自然。")]),t._v(" "),a("p",[t._v("所以制定一套规范有效的git工作流来规范我们的分支管理和工作流程是极其必要的，并且越早越好。")]),t._v(" "),a("p",[t._v("我们的工作流，请使用下面的规范流程")]),t._v(" "),a("p",[a("img",{attrs:{src:s(225),alt:"my-gitflow"}})]),t._v(" "),a("h3",{attrs:{id:"git-使用规范流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-使用规范流程","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 使用规范流程")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 使用规范流程"),a("OutboundLink")],1),t._v(" 团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。")]),t._v(" "),a("ol",[a("li",[t._v("新建分支"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次开发新功能，都应该新建一个单独的分支，可参考[Git分支管理策略]()")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout release\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev_xxx\n")])])])]),t._v(" "),a("li",[t._v("提交分支commit"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支修改后，就可以提交commit了")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# verbose参数，会列出 diff 的结果")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --verbose\n")])])])]),t._v(" "),a("li",[t._v("撰写提交信息\n提交commit时，必须给出完整扼要的提交信息，下面是一个范本。"),a("div",{staticClass:"language-commit extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("第一行是不超过50个字的提要，然后空一行\n\n* 罗列出改动原因，\n* 主要变动，\n* 以及需要注意的问题\n\n最后，提供对应的网址（比如Bug ticket）。\n")])])])]),t._v(" "),a("li",[t._v("与主干同步"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下操作方式待定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支的开发过程中，要经常与主干保持同步")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase origin/master\n")])])])]),t._v(" "),a("li",[t._v("合并commit"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下操作待定!!! 合并暂定为 git merge --no-ff")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支开发完成后，很可能有一堆commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 那么，怎样才能将多个commit合并呢？这就要用到 git rebase 命令。")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i origin/master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i参数表示互动（interactive），这时git会打开一个互动界面，进行下一步操作。")]),t._v("\n- pick：正常选中\n- reword：选中，并且修改提交信息；\n- edit：选中，rebase时会暂停，允许你修改这个commit\n- squash：选中，会将当前commit与上一个commit合并\n- fixup：与squash相同，但不会保存当前commit的提交信息\n- exec：执行其他shell命令\n")])])])]),t._v(" "),a("li",[t._v("推送到远程仓库"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并commit后，就可以推送当前分支到远程仓库了")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不要使用 --force")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force origin\n")])])])]),t._v(" "),a("li",[t._v("发出Pull Request"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交到远程仓库以后，就可以发出 Pull Request 到发布分支release，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后请求别人进行代码review，确认可以合并到release")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])])]),t._v(" "),a("li",[t._v("至少两人code review，之后完成合并")]),t._v(" "),a("li",[t._v("新增tag标签，发布上线"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.x.x\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --tags\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" 进阶")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/2221658/whats-the-difference-between-head-and-head-in-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("HEAD^ 与 HEAD~ 的区别"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://yanhaijing.com/git/2017/07/14/four-method-for-git-merge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解4种git合并分支方法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://yanhaijing.com/git/2017/02/08/deep-git-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git内部原理"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git --fixup & --autosquash"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("其他参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 工作流程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E5%88%86%E5%B8%83%E5%BC%8F-Git-%E5%88%86%E5%B8%83%E5%BC%8F%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式-Git-分布式工作流程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2012/07/git.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git分支管理策略"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5b2b76e251882574934c388d",target:"_blank",rel:"noopener noreferrer"}},[t._v("高效git工作流"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_32452623/article/details/75264547",target:"_blank",rel:"noopener noreferrer"}},[t._v("与忽略文件 .gitignore 的斗智斗勇"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/c221f99f0bfd",target:"_blank",rel:"noopener noreferrer"}},[t._v("15分钟成为 GIT 专家"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);