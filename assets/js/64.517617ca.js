(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{181:function(t,e,v){"use strict";v.r(e);var _={props:["slot-key"]},i=v(17),a=Object(i.a)(_,function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[v("h1",{attrs:{id:"npm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),v("p",[t._v("公司对于搭建本地私有npm库有如下要求：")]),t._v(" "),v("ul",[v("li",[t._v("私有包托管在内部服务器中")]),t._v(" "),v("li",[t._v("项目中使用了公共仓库上的公共包，也使用了内部服务器上的私有包")]),t._v(" "),v("li",[t._v("希望下载的时候，公共包走公共仓库，私有包走内部服务器的私有仓库")]),t._v(" "),v("li",[t._v("服务器硬盘有限，希望只缓存下载过的包，而不是全部同步。")]),t._v(" "),v("li",[t._v("对于下载，发布npm包有对应的权限管理，安装方便，配置简单，依赖少。")])]),t._v(" "),v("h2",{attrs:{id:"cnpm-vs-sinopia"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-vs-sinopia","aria-hidden":"true"}},[t._v("#")]),t._v(" cnpm VS sinopia")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("-")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("cnpm")]),t._v(" "),v("th",{staticStyle:{"text-align":"right"}},[t._v("sinopia")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("系统支持")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("非windows")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("全系统")])]),t._v(" "),v("tr",[v("td",[t._v("安装")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("复杂")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("简单")])]),t._v(" "),v("tr",[v("td",[t._v("配置")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("较多，适合个性化需求较多的")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])]),t._v(" "),v("tr",[v("td",[t._v("配置——修改默认镜像")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),v("tr",[v("td",[t._v("存储")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("mysql")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("文件格式，直观")])]),t._v(" "),v("tr",[v("td",[t._v("服务托管")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("默认后台运行")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("pm2, doker, forever")])]),t._v(" "),v("tr",[v("td",[t._v("文档资料")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("较多")]),t._v(" "),v("td",{staticStyle:{"text-align":"right"}},[t._v("较少")])])])]),t._v(" "),v("h3",{attrs:{id:"到底谁比较好？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#到底谁比较好？","aria-hidden":"true"}},[t._v("#")]),t._v(" 到底谁比较好？")]),t._v(" "),v("blockquote",[v("p",[t._v("有言道：脱离业务场景谈解决方案，都是耍流氓。")])]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.jianshu.com/p/659fb418c9e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("企业私有 npm 服务器"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/jaywcjlove/handbook/blob/master/CentOS/%E5%9C%A85%E5%88%86%E9%92%9F%E5%86%85%E6%90%AD%E5%BB%BA%E4%BC%81%E4%B8%9A%E5%86%85%E9%83%A8%E7%A7%81%E6%9C%89npm%E4%BB%93%E5%BA%93.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建公司私有npm仓库"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000005790827",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Sinopia搭建私有的npm仓库"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"http://www.competa.com/blog/how-to-run-npm-without-sudo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to run npm without sudo"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"常用工具配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用工具配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用工具配置")]),t._v(" "),v("ul",[v("li",[t._v("npm 全局工具\n"),v("ul",[v("li",[t._v("npm\n"),v("ul",[v("li",[v("code",[t._v("npm list -g --depth=0")])]),t._v(" "),v("li",[v("code",[t._v("npm i -g xxx")])])])]),t._v(" "),v("li",[t._v("yarn\n"),v("ul",[v("li",[v("code",[t._v("yarn global add xxx")])]),t._v(" "),v("li",[t._v("Yarn 升级 "),v("code",[t._v("curl --compressed -o- -L https://yarnpkg.com/install.sh | bash")])])])]),t._v(" "),v("li",[t._v("n 管理 nodejs 版本 "),v("code",[t._v("n list")])]),t._v(" "),v("li",[t._v("nrm 管理npm源（或镜像源）"),v("code",[t._v("nrm list")])]),t._v(" "),v("li",[t._v("npx 一个npm包执行器\n"),v("ul",[v("li",[t._v("临时安装可执行依赖包，不用全局安装，不用担心长期的污染。")]),t._v(" "),v("li",[t._v("可以执行依赖包中的命令，安装完成自动运行")])])]),t._v(" "),v("li",[t._v("基于 nodejs 启动一个本地 http 服务\n"),v("ul",[v("li",[t._v("http-server "),v("code",[t._v("hs dist -p 8090 -o")])]),t._v(" "),v("li",[t._v("serve "),v("code",[t._v("serve dist -l 3040")])])])]),t._v(" "),v("li",[t._v("npm-check 检查依赖库版本\n"),v("ul",[v("li",[v("code",[t._v("npm-check -ug")])])])]),t._v(" "),v("li",[t._v("gh-pages 发布文件到 github 任意分支\n"),v("ul",[v("li",[t._v("发布 dist 目录到 gh-pages 分支，附带message "),v("code",[t._v("${branchName}-${commitId}")])]),t._v(" "),v("li",[v("code",[t._v("gh-pages -d dist --message $(git symbolic-ref --short -q HEAD)-$(git rev-parse --short HEAD)")])]),t._v(" "),v("li",[t._v("可选参数\n"),v("ul",[v("li",[t._v("发布到远程 "),v("code",[t._v("-r git@github.com:jskit/kit-admin.git")])]),t._v(" "),v("li",[t._v("发布到分支 "),v("code",[t._v("-b newBranch")])])])])])]),t._v(" "),v("li",[t._v("jsnice 反混淆 js")]),t._v(" "),v("li",[t._v("pm2")]),t._v(" "),v("li",[t._v("eslint")]),t._v(" "),v("li",[t._v("babel-cli")]),t._v(" "),v("li",[t._v("@vue/cli 初始化 vue 项目")]),t._v(" "),v("li",[t._v("sinopia")])])])]),t._v(" "),v("h2",{attrs:{id:"faq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),v("p",[t._v("h5_blade 老项目运行不起来，可能的原因")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("sudo npm i -g node-sass")])])]),t._v(" "),v("p",[t._v("Error: EACCES, mkdir '/usr/local/lib/node_modules/node-sass' - installing globally")]),t._v(" "),v("p",[t._v("解决方案（h5_blade项目）")]),t._v(" "),v("p",[t._v("有说要清除npm cache，此处解决方案不明，在处理了npm cache 以及删除了~/.npm/_cacache 后，重新 npm i 好了（没有安装全局的node-sass），同时注意当前的 npm@5.6.0 和 nodejs@9.11.2 版本")])])},[],!1,null,null,null);a.options.__file="readme.md";e.default=a.exports}}]);