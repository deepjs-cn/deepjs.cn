(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{271:function(t,e,a){"use strict";a.r(e);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(2),v=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/getting-started/what-is-npm",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方 npm 文档"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("ul",[a("li",[t._v("开发 npm 包注意事项")]),t._v(" "),a("li",[t._v("开发 npm 包，相互间需要引用又处于开发阶段，如何配置调试最方便")]),t._v(" "),a("li",[t._v("发布 npm，不编译发布是否 OK（使用 es6源码）")])]),t._v(" "),a("h2",{attrs:{id:"常用工具配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具配置")]),t._v(" "),a("ul",[a("li",[t._v("npm 全局工具\n"),a("ul",[a("li",[t._v("npm\n"),a("ul",[a("li",[a("code",[t._v("npm list -g --depth=0")])]),t._v(" "),a("li",[a("code",[t._v("npm i -g xxx")])])])]),t._v(" "),a("li",[t._v("yarn\n"),a("ul",[a("li",[a("code",[t._v("yarn global add xxx")])]),t._v(" "),a("li",[t._v("Yarn 升级 "),a("code",[t._v("curl --compressed -o- -L https://yarnpkg.com/install.sh | bash")])])])]),t._v(" "),a("li",[t._v("n 管理 nodejs 版本 "),a("code",[t._v("n list")])]),t._v(" "),a("li",[t._v("nrm 管理npm源（或镜像源）"),a("code",[t._v("nrm list")])]),t._v(" "),a("li",[t._v("npx 一个npm包执行器\n"),a("ul",[a("li",[t._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),t._v(" "),a("li",[t._v("可以执行依赖包中的命令，安装完成自动运行")])])]),t._v(" "),a("li",[t._v("基于 nodejs 启动一个本地 http 服务\n"),a("ul",[a("li",[t._v("http-server "),a("code",[t._v("hs dist -p 8090 -o")])]),t._v(" "),a("li",[t._v("serve "),a("code",[t._v("serve dist -l 3040")])])])]),t._v(" "),a("li",[t._v("npm-check 检查依赖库版本\n"),a("ul",[a("li",[a("code",[t._v("npm-check -ug")])])])]),t._v(" "),a("li",[t._v("gh-pages 发布文件到 github 任意分支\n"),a("ul",[a("li",[t._v("发布 dist 目录到 gh-pages 分支，附带message "),a("code",[t._v("${branchName}-${commitId}")])]),t._v(" "),a("li",[a("code",[t._v("gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)")])]),t._v(" "),a("li",[t._v("可选参数\n"),a("ul",[a("li",[t._v("发布到远程 "),a("code",[t._v("-r git@github.com:jskit/kit-admin.git")])]),t._v(" "),a("li",[t._v("发布到分支 "),a("code",[t._v("-b newBranch")])])])])])]),t._v(" "),a("li",[t._v("jsnice 反混淆 js")]),t._v(" "),a("li",[t._v("pm2")]),t._v(" "),a("li",[t._v("eslint")]),t._v(" "),a("li",[t._v("babel-cli")]),t._v(" "),a("li",[t._v("@vue/cli 初始化 vue 项目")]),t._v(" "),a("li",[t._v("sinopia")])])])]),t._v(" "),a("h2",{attrs:{id:"npm-包发布流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-包发布流程","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 包发布流程")]),t._v(" "),a("p",[t._v("发布 npm 包的流程简述如下：")]),t._v(" "),a("ol",[a("li",[t._v("如果还没有 npm 帐号，可以到 npm 官网注册一个 npm 帐号。")]),t._v(" "),a("li",[t._v("在本地登录 npm 帐号，在本地执行：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" adduser\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" login\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在已完成编写的 npm 包根目录下执行：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" unpublish xxx@x.x.x\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("两小时内，发布的包可以撤销，之后就不能撤销了。")])]),t._v(" "),a("p",[t._v("到此，npm 包就成功发布到 npm 平台了。")]),t._v(" "),a("blockquote",[a("p",[t._v("PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。")])]),t._v(" "),a("h2",{attrs:{id:"关于私有-npm-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于私有-npm-库","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于私有 npm 库")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),a("p",[t._v("实际情况下，如果没有特别要求或安全限制，可以不考虑私有库，使用 npm 平台更稳定。")])]),t._v(" "),a("p",[t._v("一般情况，公司对于搭建本地私有npm库有如下要求：")]),t._v(" "),a("ul",[a("li",[t._v("私有包托管在内部服务器中")]),t._v(" "),a("li",[t._v("项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包")]),t._v(" "),a("li",[t._v("希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库")]),t._v(" "),a("li",[t._v("服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。")]),t._v(" "),a("li",[t._v("对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。")])]),t._v(" "),a("h2",{attrs:{id:"cnpm-vs-sinopia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-vs-sinopia","aria-hidden":"true"}},[t._v("#")]),t._v(" cnpm VS sinopia")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("-")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("cnpm")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("sinopia")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("系统支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("全系统")])]),t._v(" "),a("tr",[a("td",[t._v("安装")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("简单")])]),t._v(" "),a("tr",[a("td",[t._v("配置")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("较多，适合个性化需求较多的")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])]),t._v(" "),a("tr",[a("td",[t._v("配置——修改默认镜像")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),a("tr",[a("td",[t._v("存储")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("mysql")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("文件格式，直观")])]),t._v(" "),a("tr",[a("td",[t._v("服务托管")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认后台运行")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("pm2, doker, forever")])]),t._v(" "),a("tr",[a("td",[t._v("文档资料")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("较多")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])])])]),t._v(" "),a("h3",{attrs:{id:"到底谁比较好？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#到底谁比较好？","aria-hidden":"true"}},[t._v("#")]),t._v(" 到底谁比较好？")]),t._v(" "),a("blockquote",[a("p",[t._v("有言道：脱离业务场景谈解决方案，都是耍流氓。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/659fb418c9e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业私有 npm 服务器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建公司私有npm仓库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000005790827",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Sinopia搭建私有的npm仓库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.competa.com/blog/how-to-run-npm-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to run npm without sudo"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[t._v("h5_blade 老项目运行不起来，可能的原因")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sudo npm i -g node-sass")])])]),t._v(" "),a("p",[t._v("Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally")]),t._v(" "),a("p",[t._v("解决方案（h5_blade项目）")]),t._v(" "),a("p",[t._v("有说要清除npm cache，此处解决方案不明，在处理了npm cache 以及删除了~/.npm/_cacache 后，重新 npm i 好了（没有安装全局的node-sass），同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本")])])},[],!1,null,null,null);v.options.__file="readme.md";e.default=v.exports}}]);