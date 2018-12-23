(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{155:function(t,e,n){"use strict";n.r(e);var a=n(12),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://docs.npmjs.com/getting-started/what-is-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 npm 文档"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://javascript.ruanyifeng.com/nodejs/npm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰-npm模块管理器"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/atian25/blog/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("调试技巧 - npm link"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding npm-link"),n("OutboundLink")],1),t._v(" 翻墙")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/atian25/blog/issues/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何挑选高质量的 Node.js 模块"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/node-modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-modules"),n("OutboundLink")],1),t._v(" 是国内很多 Node.js 大神维护的 Group，里面的模块都经受住大规模的应用考虑，标准化和质量都不错")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22934066",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么我不使用 shrinkwrap（lock）"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://greenkeeper.io/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("greenkeeper"),n("OutboundLink")],1),t._v(" 自动化依赖关系管理")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-browser",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer神器官方文档"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://zhaoqize.github.io/puppeteer-api-zh_CN/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Puppeteer 中文文档"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/1394htw/p/9627260.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer 安装失败的解决方案"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("你可能需要看一下"),n("a",{attrs:{href:"https://segmentfault.com/a/1190000012606616",target:"_blank",rel:"noopener noreferrer"}},[t._v("chromium下载跳坑"),n("OutboundLink")],1),t._v("这个方案，但还是需要翻出去下载，")]),t._v(" "),n("li",[t._v("如果上面方案不行，那么你可能需要了解下"),n("a",{attrs:{href:"https://juejin.im/post/5b4a043751882519790c7ad7",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer 安装失败的解决办法"),n("OutboundLink")],1),t._v("，就是去拿到下载的那个版本数字，再去下载，但是可能遇到的问题是找不到downloadURL那堆链接的文件，")]),t._v(" "),n("li",[t._v("那么你就需要"),n("a",{attrs:{href:"https://github.com/billfeller/billfeller.github.io/issues/232",target:"_blank",rel:"noopener noreferrer"}},[t._v("puppeteer环境部署问题小记"),n("OutboundLink")],1),t._v("这个方案，")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、安装 puppeteer "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NPM")]),t._v("包后，查询"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json配置，获取依赖 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHROMIUM")]),t._v(" 版本号：\n\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"puppeteer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chromium_revision"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"543305"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、将 chromium_revision 属性值替换到 BrowserFetch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 下载路径，根据系统环境，计算获取完整的下载地址，完成下载任务：\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_DOWNLOAD_HOST")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://storage.googleapis.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" downloadURLs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nlinux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Linux_x64/%d/chrome-linux.zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmac"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Mac/%d/chrome-mac.zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nwin32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Win/%d/chrome-win32.zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nwin64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%s/chromium-browser-snapshots/Win_x64/%d/chrome-win32.zip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("downloadURLs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_platform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_downloadHost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" revision"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n比如，https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("storage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("googleapis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromium"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("browser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("snapshots"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Win_x64"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("543305")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("win32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、将下载的 chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zip 解压到puppeteer指定路径 puppeteer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_platform"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("chromium_revision"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xxx 下即可；\n比如：node_modules\\puppeteer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chromium\\win64"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("543305")]),t._v("\\chrome"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("win32\n\n这里给出了很多其他问题的解决方案，\n")])])]),n("ul",[n("li",[t._v("在线的集成服务\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TravisCI"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://circleci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CircleCI"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.appveyor.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("appveyor"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/zhangzq86/article/details/55657495",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用 AppVeyor 实现 GitHub 托管项目的自动化集成"),n("OutboundLink")],1)])])])])])]),t._v(" "),n("p",[t._v("关于 lerna")]),t._v(" "),n("p",[t._v("多模块管理工具，用来帮助维护monorepo")]),t._v(" "),n("p",[t._v("P.S.Lerna是Babel自己日用并开源的工具，见 "),n("a",{attrs:{href:"https://github.com/babel/babel/blob/master/doc/design/monorepo.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Why is Babel a monorepo?"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/entry/586f00bc128fe100580a6f78",target:"_blank",rel:"noopener noreferrer"}},[t._v("monorepo 新浪潮"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("monorepo(monolithic repository)，与multirepo相对，分别是单代码仓库与多代码仓库（one-repository-per-module）")]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.ayqy.net/blog/lerna%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna入门指南"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/lerna/lerna-changelog",target:"_blank",rel:"noopener noreferrer"}},[t._v("用lerna-changelog 来梳理 changelog"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/galaxybing/lerna-repos-init.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 monorepo 结构，管理多个 repo(示例)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/pigcan/monorepo-example",target:"_blank",rel:"noopener noreferrer"}},[n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/chinanf-boy/lerna-zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna 中文文档"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/chinanf-boy/lerna-zh/blob/master/FAQ.zh.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://lernajs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://lernajs.io/"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/szarouski/lerna-wizard",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna-wizard lerna的命令行向导"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35237759",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用lerna优雅地管理多个package"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),n("ul",[n("li",[t._v("开发 npm 包注意事项")]),t._v(" "),n("li",[t._v("开发 npm 包，相互间需要引用又处于开发阶段，如何配置调试最方便")]),t._v(" "),n("li",[t._v("发布 npm，不编译发布是否 OK（使用 es6源码）")])]),t._v(" "),n("h2",{attrs:{id:"常用工具配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用工具配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具配置")]),t._v(" "),n("ul",[n("li",[t._v("npm\n"),n("ul",[n("li",[n("code",[t._v("npm list -g --depth=0")]),t._v(" "),n("ul",[n("li",[t._v("查看全局包位置 "),n("code",[t._v("npm root -g")])]),t._v(" "),n("li",[t._v("全局模块安装路径 "),n("code",[t._v("/usr/local/lib/node_modules")]),t._v("，")])])]),t._v(" "),n("li",[n("code",[t._v("npm i -g xxx")])]),t._v(" "),n("li",[n("code",[t._v("npm uninstall -g xxx")])]),t._v(" "),n("li",[t._v("安装最新版 "),n("code",[t._v("npm i npm@latest -g")])])])]),t._v(" "),n("li",[t._v("yarn\n"),n("ul",[n("li",[n("code",[t._v("yarn global add xxx")])]),t._v(" "),n("li",[t._v("Yarn 升级 "),n("code",[t._v("curl --compressed -o- -L https://yarnpkg.com/install.sh | bash")])])])]),t._v(" "),n("li",[t._v("n 管理 nodejs 版本\n"),n("ul",[n("li",[n("code",[t._v("sudo n list")])]),t._v(" "),n("li",[n("code",[t._v("sudo n use x.x.x")])])])]),t._v(" "),n("li",[t._v("nrm 管理npm源（或镜像源）\n"),n("ul",[n("li",[n("code",[t._v("nrm ls")])]),t._v(" "),n("li",[n("code",[t._v("nrm use taobao")])])])]),t._v(" "),n("li",[t._v("npx 一个npm包执行器\n"),n("ul",[n("li",[t._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),t._v(" "),n("li",[t._v("可以执行依赖包中的命令，安装完成自动运行")])])]),t._v(" "),n("li",[t._v("基于 nodejs 启动一个本地 http 服务\n"),n("ul",[n("li",[t._v("http-server "),n("code",[t._v("hs dist -p 8090 -o")])]),t._v(" "),n("li",[t._v("serve "),n("code",[t._v("serve dist -l 3040")])])])]),t._v(" "),n("li",[t._v("npm-check 检查依赖库版本\n"),n("ul",[n("li",[n("code",[t._v("npm-check -ug")])])])]),t._v(" "),n("li",[t._v("gh-pages 发布文件到 github 任意分支\n"),n("ul",[n("li",[t._v("发布 dist 目录到 gh-pages 分支，附带message "),n("code",[t._v("${branchName}-${commitId}")])]),t._v(" "),n("li",[n("code",[t._v("gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)")])]),t._v(" "),n("li",[t._v("可选参数\n"),n("ul",[n("li",[t._v("发布到远程 "),n("code",[t._v("-r git@github.com:jskit/kit-admin.git")])]),t._v(" "),n("li",[t._v("发布到分支 "),n("code",[t._v("-b newBranch")])])])])])]),t._v(" "),n("li",[t._v("jsnice 反混淆 js")]),t._v(" "),n("li",[t._v("pm2")]),t._v(" "),n("li",[t._v("eslint")]),t._v(" "),n("li",[t._v("babel-cli")]),t._v(" "),n("li",[t._v("@vue/cli 初始化 vue 项目")]),t._v(" "),n("li",[t._v("sinopia")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://lernajs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("lerna"),n("OutboundLink")],1),t._v(" 是一个优化使用git和npm管理多包存储库的工作流程的工具。")])]),t._v(" "),n("h2",{attrs:{id:"npm-包发布流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-包发布流程","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 包发布流程")]),t._v(" "),n("p",[t._v("发布 npm 包的流程简述如下：")]),t._v(" "),n("ol",[n("li",[t._v("如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。")]),t._v(" "),n("li",[t._v("在本地登录 npm 帐号，在本地执行：")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\n")])])]),n("p",[t._v("或者")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" login\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("在已完成编写的 npm 包根目录下执行：")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" unpublish xxx@x.x.x\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("两小时内，发布的包可以撤销，之后就不能撤销了。")])]),t._v(" "),n("p",[t._v("到此，npm 包就成功发布到 npm 平台了。")]),t._v(" "),n("blockquote",[n("p",[t._v("PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。")])]),t._v(" "),n("h2",{attrs:{id:"关于私有-npm-库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于私有-npm-库","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于私有 npm 库")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),n("p",[t._v("实际情况下，如果没有特别要求或安全限制，可以不考虑私有库，使用 npm 平台更稳定。")])]),t._v(" "),n("p",[t._v("一般情况，公司对于搭建本地私有npm库有如下要求：")]),t._v(" "),n("ul",[n("li",[t._v("私有包托管在内部服务器中")]),t._v(" "),n("li",[t._v("项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包")]),t._v(" "),n("li",[t._v("希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库")]),t._v(" "),n("li",[t._v("服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。")]),t._v(" "),n("li",[t._v("对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。")])]),t._v(" "),n("h2",{attrs:{id:"cnpm-vs-sinopia"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-vs-sinopia","aria-hidden":"true"}},[t._v("#")]),t._v(" cnpm VS sinopia")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("-")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("cnpm")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("sinopia")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("系统支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("非windows")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("全系统")])]),t._v(" "),n("tr",[n("td",[t._v("安装")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("简单")])]),t._v(" "),n("tr",[n("td",[t._v("配置")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("较多，适合个性化需求较多的")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])]),t._v(" "),n("tr",[n("td",[t._v("配置——修改默认镜像")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),n("tr",[n("td",[t._v("存储")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("mysql")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("文件格式，直观")])]),t._v(" "),n("tr",[n("td",[t._v("服务托管")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("默认后台运行")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("pm2, doker, forever")])]),t._v(" "),n("tr",[n("td",[t._v("文档资料")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("较多")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])])])]),t._v(" "),n("h3",{attrs:{id:"到底谁比较好？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#到底谁比较好？","aria-hidden":"true"}},[t._v("#")]),t._v(" 到底谁比较好？")]),t._v(" "),n("blockquote",[n("p",[t._v("有言道：脱离业务场景谈解决方案，都是耍流氓。")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/659fb418c9e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业私有 npm 服务器"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建公司私有npm仓库"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000005790827",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Sinopia搭建私有的npm仓库"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.competa.com/blog/how-to-run-npm-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to run npm without sudo"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),n("p",[t._v("这里收集一些遇到的 npm 问题")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000009709213",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 和 yarn 缓存策略对比"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("npm\n"),n("ul",[n("li",[t._v("npm cache add 主要是 npm 内部使用")]),t._v(" "),n("li",[t._v("npm cache clean 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数")]),t._v(" "),n("li",[t._v("npm cache verify 验证缓存数据的有效性和完整性，清理垃圾数据")])])]),t._v(" "),n("li",[t._v("yarn\n"),n("ul",[n("li",[t._v("yarn cache ls 列出当前缓存的包列表")]),t._v(" "),n("li",[t._v("yarn cache dir 显示缓存数据的目录")]),t._v(" "),n("li",[t._v("yarn cache clean 清除所有缓存数据")])])])])])]),t._v(" "),n("p",[n("strong",[t._v("升级npm 遇到错误")])]),t._v(" "),n("p",[n("code",[t._v("sudo npm i -g npm")]),t._v(" 全局升级遇到错误")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Unexpected end of input at 1:574411\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" 3.4"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("init-package-json"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.9.3"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("lockfile"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~1.0.1"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("lru-cache"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":"')]),t._v("~4\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" ERR"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),n("p",[t._v("使用一下方法处理下缓存，之后再重新执行安装即可")]),t._v(" "),n("p",[n("code",[t._v("sudo npm cache verify -g")])]),t._v(" "),n("p",[n("strong",[t._v("h5_blade 老项目运行不起来，可能的原因")])]),t._v(" "),n("p",[n("code",[t._v("sudo npm i -g node-sass")]),t._v(" 报以下错误")]),t._v(" "),n("p",[t._v("Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally")]),t._v(" "),n("p",[t._v("解决方案（h5_blade项目）")]),t._v(" "),n("p",[t._v("有说要清除cache，此处解决方案不明，在使用 "),n("code",[t._v("npm cache clean --force")]),t._v(" 删除了 ~/.npm/_cacache 后，重新 npm i 好了，同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本")]),t._v(" "),n("p",[t._v("以下为解决办法步骤（"),n("strong",[t._v("不需要")]),t._v("安装全局的node-sass）")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache verify\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [清除缓存](https://docs.npmjs.com/cli/cache)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rm -rf ~/.npm/_cacache")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache clean --force\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除当前项目下的 node_modules")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf node_modules\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g node-gyp node-pre-gyp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n")])])]),n("p",[t._v("报错 Install failed with Node v.10 due to upath@1.0.4 incompatibility")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("error upath@1.0.4: The engine "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v(" is incompatible with this module. Expected version "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('">=4 <=9"')]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v(" Got "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.14.1"')]),t._v("\nerror Found incompatible module\n")])])]),n("p",[t._v("解决方案")]),t._v(" "),n("p",[t._v("Instead, the proper solution is to delete "),n("code",[t._v("node_modules/")]),t._v(", "),n("code",[t._v("package-lock.json")]),t._v(" & "),n("code",[t._v("yarn.lock")]),t._v(" and run "),n("code",[t._v("yarn")]),t._v(" install or "),n("code",[t._v("npm i")]),t._v(" again.")])])},[],!1,null,null,null);r.options.__file="readme.md";e.default=r.exports}}]);