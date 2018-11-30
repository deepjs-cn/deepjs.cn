(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{253:function(e,t,r){"use strict";r.r(t);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=r(2),l=Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[r("h1",{attrs:{id:"mac-开发环境配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mac-开发环境配置","aria-hidden":"true"}},[e._v("#")]),e._v(" Mac 开发环境配置")]),e._v(" "),r("h2",{attrs:{id:"常用配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 常用配置")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("brew"),r("OutboundLink")],1),e._v(" - "),r("a",{attrs:{href:"https://github.com/Homebrew/homebrew",target:"_blank",rel:"noopener noreferrer"}},[e._v("homebrew"),r("OutboundLink")],1),e._v(" 是mac下类似apt-get的软件管理工具\n"),r("ul",[r("li",[e._v("参考 "),r("router-link",{attrs:{to:"./brew.html"}},[e._v("brew 配置")])],1)])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zsh"),r("OutboundLink")],1),e._v(" 参考介绍"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/19556676",target:"_blank",rel:"noopener noreferrer"}},[e._v("终极 Shell"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("安装 "),r("code",[e._v('sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')])]),e._v(" "),r("li",[e._v("替换bash的方式 "),r("code",[e._v("chsh -s /bin/zsh")]),e._v(", 重启终端或执行 "),r("code",[e._v("source ~/.zshrc")]),e._v(" 启用配置")]),e._v(" "),r("li",[e._v("设置默认 shell "),r("code",[e._v("usermod -s /bin/zsh")])]),e._v(" "),r("li",[e._v("查看当前 shell "),r("code",[e._v("echo $SHELL")])]),e._v(" "),r("li",[e._v("配置实现自动跳转的插件\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/rupa/z",target:"_blank",rel:"noopener noreferrer"}},[e._v("z"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("无需安装，配置修改 "),r("code",[e._v("~/.zshrc")]),e._v("中 "),r("code",[e._v("plugins=(git z)")]),e._v(" 即可")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/joelthelion/autojump",target:"_blank",rel:"noopener noreferrer"}},[e._v("autojump"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("安装 "),r("code",[e._v("brew install autojump")])]),e._v(" "),r("li",[e._v("配置 "),r("code",[e._v("plugins=(git autojump)")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/clvv/fasd",target:"_blank",rel:"noopener noreferrer"}},[e._v("fasd"),r("OutboundLink")],1),e._v(" 功能上和z, autojump差不多，功能和速度上更优\n"),r("ul",[r("li",[e._v("安装 "),r("code",[e._v("brew install fasd")]),e._v(", 之后执行 "),r("code",[e._v('eval "$(fasd --init auto)"')])]),e._v(" "),r("li",[e._v("配置 "),r("code",[e._v("plugins=(git fasd)")])])])])])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://iterm2.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iTerm2"),r("OutboundLink")],1),e._v(" 终端利器替代 terminal")]),e._v(" "),r("li",[e._v("Finder 搭配上 "),r("a",{attrs:{href:"https://zipzapmac.com/Go2Shell",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Go2Shell")]),r("OutboundLink")],1),e._v(" 插件，可以在目录中直接打开终端，且可指定终端为iTerm2。\n"),r("ul",[r("li",[e._v("Go2Shell默认没有设置界面，需要用命令行打开(隐藏的真深)\n"),r("ul",[r("li",[r("code",[e._v("open -a Go2Shell --args config")])])])])])]),e._v(" "),r("li",[e._v("代理工具 "),r("a",{attrs:{href:"https://www.charlesproxy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("charles"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("开机启动项管理\n"),r("ul",[r("li",[e._v("Mac 系统自带了开机启动项管理工具\n"),r("ul",[r("li",[e._v("系统偏好设置 -> 用户与群组 -> 登陆项")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/b65c1d339eec",target:"_blank",rel:"noopener noreferrer"}},[e._v("launchctl"),r("OutboundLink")],1),e._v(" 是一个统一的服务管理框架，启动、停止和管理守护进程、应用程序、进程和脚本。")])])])]),e._v(" "),r("h2",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他")]),e._v(" "),r("p",[e._v("记录其他一些常用操作")]),e._v(" "),r("ul",[r("li",[e._v("MAC查看端口占用情况，（port替换成端口号，比如6379）可以查看该端口被什么程序占用，并显示PID，方便KILL\n"),r("ul",[r("li",[r("code",[e._v("lsof -i tcp:port")])])])]),e._v(" "),r("li",[e._v("查看端口 "),r("code",[e._v('lsof -i -P | grep -i “listen"')])]),e._v(" "),r("li",[e._v("查找文件\n"),r("code",[e._v("find . -type d -iname 文件名")])])])])},[],!1,null,null,null);l.options.__file="readme.md";t.default=l.exports}}]);