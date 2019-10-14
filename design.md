
# 文档库

支持每个频道选择模板

## 资讯推荐

感兴趣的站点，可以选感兴趣的站点，以tag形式存在，可以切换

## 知识点

以话题划分，列出各种知识要点

## 成长

成长记录、点点滴滴

## 工具类

提供方便好用的工具，可以设为首页来使用，具备一个好的首页界面

## 开发文档列表

收集列举自己常用的文档列表，可以基于工种推荐
包含文档地址，官站，中文、英文，github地址，tag分类等

基于频次排序，可以置顶，

每个文档的内容，支持搜索

## 优秀社区推荐

紧密的相关文档展示，学习社区，

## 用户系统

## 收藏

收藏喜欢的文章等

话题 topic
标签 tags
文档 docs
社区 community
书籍 book
~~博客 blog~~

语义化版本 2.0.0 https://semver.org/lang/zh-CN/

主版本号 . 子版本号 [. 修正版本号 [. 编译版本号 ]]

- A大幅度转变的內核。这是很少发生变化，只有当发生重大变化的代码和核心发生才會发生。在历史上曾改变两次的內核：1994年的1.0及1996年的2.0。
- B是指一些重大修改的內核。
  - 內核使用了传统的奇数次要版本号码的软件号码系統(用偶数的次要版本号码來表示稳定版本)。
- C是指轻微修订的內核。这个数字当有安全补丁,bug修复,新的功能或驱动程序,內核便会有变化。

自2.6.0(2003年12月)发布后,人们认识到，更短的发布周期将是有益的。自那时起：

- A和B是无关要的
- C是內核的版本
- D是安全补丁(通常会以'rc'表示)

应根据下面的约定使用这些部分：

- Major ：具有相同名称但不同主版本号的程序集不可互换。例如，这适用于对产品的大量重写，这些重写使得无法实现向后兼容性。
- Minor ：如果两个程序集的名称和主版本号相同，而次版本号不同，这指示显著增强，但照顾到了向后兼容性。例如，这适用于产品的修正版或完全向后兼容的新版本。
- Build ：内部版本号的不同表示对相同源所作的重新编译。这适合于更改处理器、平台或编译器的情况。
- Revision ：名称、主版本号和次版本号都相同但修订号不同的程序集应是完全可互换的。这适用于修复以前发布的程序集中的安全漏洞。

程序集的只有内部版本号或修订号不同的后续版本被认为是先前版本的修补程序 (Hotfix) 更新。

=====附录软件版本名称=====

α（alphal） 内部测试版
α版，此版本表示该软件仅仅是一个初步完成品，通常只在软件开发者内部交流，也有很少一部分发布给专业测试人员。一般而言，该版本软件的 bug 较多，普通用户最好不要安装。

β（beta）外部测试版
该版本相对于α版已有了很大的改进，消除了严重的错误，但还是存在着一些缺陷，需要经过大规模的发布测试来进一步消除。这一版本通常由软件公司免费发布，用户可从相关的站点下载。通过一些专业爱好者的测试，将结果反馈给开发者，开发者们再进行有针对性的修改。该版本也不适合一般用户安装。


https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5be91762f265da611b57e015

- JS
  - [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)，这套书深入的讲解很多 JS 的内容，英文版是开源免费阅读的，如果你英文不好的话，国内这套书已经有出版了，可以选择购买。
  - [Functional-Light-JS](https://github.com/getify/Functional-Light-JS)，这本书是讲解函数式编程的，函数式编程也是一种编程范式，轻量级的函数式可以很方便的解决很多问题，有兴趣的可以一读。
  - [33-js-concepts](https://github.com/leonardomso/33-js-concepts)，这份资料讲解了 33 个前端开发必须知道的 JS 概念，内容是英文的，如果你英文不好的话，可以寻找这份资料的中文版。
  - [前端精读周刊](https://github.com/dt-fe/weekly)，这是一份前端好文集合，每周都会更新，目前已经更新了 84 篇文章。
  - [前端性能清单](https://github.com/JohnsenZhou/Front-End-Performance-Checklist)，这是一份前端性能清单，如果你需要优化一个项目的话，可以根据这份清单一个个来检查优化项。
  - [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)，30 秒系列，很短的代码片段让你了解一个知识点。
  - [must-watch-javascript](https://github.com/AllThingsSmitty/must-watch-javascript)，这份资料包含了很多高质量的前端相关视频，值得一看。
- CSS
  - [css-protips](https://github.com/AllThingsSmitty/css-protips)，通过这份资料你可以学习到很多 tips 来提高你的 CSS 技能。
  - [30-seconds-of-css](https://github.com/30-seconds/30-seconds-of-css)，30 秒系列，很短的代码片段让你了解一个知识点
  - [CSS 世界](https://item.jd.com/12262251.html)，张鑫旭出版的书籍，没什么好说的了，看就是了。
  - [一些有趣的 CSS 话题](https://github.com/chokcoco/iCSS)，CSS 奇技淫巧，在这里，都有。
- 框架
  - 框架这里其实我不想推荐任何的资料，如果你单纯想学习一个框架的话，我只推荐阅读官方文档学习，没有任何的必要去学习其他的入门资料，因为基本上都是照搬文档的。
  - 如果你想进一步学习框架的内容的话，我推荐去阅读框架核心团队成员的博客。比如 React 核心团队成员 Dan Abramov 的 [blog](https://overreacted.io/)。
- Node
  - Node.js 几乎是资深前端工程师躲不过去的一道坎，也是一个团队的通用底层能力，学习 Node 可以更好的使用工具，建立起一套数据中间层服务于整个团队。
  - [Node.js 调试指南](https://github.com/nswbmw/node-in-debugging)，这是一本专注于讲解 Node 调试的书籍，已经出版了，但是可以开源免费阅读。
  - [Node.js：来一打 C++ 扩展](https://item.jd.com/12380404.html)，死月出版的书籍，没什么好说的，看就是了。
  - [Node.js 最佳实践](https://github.com/i0natan/nodebestpractices/blob/master/README.chinese.md)，这是对 Node.js 最佳实践中排名最高的内容的总结和分享
- 安全
  - [the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge)，这是一份安全领域的资料，如果你对安全感兴趣的话，可以阅读一下内容。
- 周报
  - [奇舞周刊](https://weekly.75team.com/)，每周都会整理一份不错的中文文章合集。
  - [TechBridge Weekly](https://weekly.techbridge.cc/)，这是一份台湾地区整理的一份多个技术领域的周报。
  - [JavaScript Weekly](https://javascriptweekly.com/)，这是一份相当有名气的英文周报，整理的文章质量都很高，如果你只想订阅一份周报，那就是它了。
  - [Pony Foo Weekly](https://ponyfoo.com/weekly)，这也是一份不错的英文周报，文章质量也很高，并且和上一份周报重叠的内容不多。
- Medium
  - Medium 上我并没有怎么固定阅读，更多的是订阅它的日报或者从别的周报上看到的 Medium 的文章，但是如果一定要推荐两个组织的话，我只推荐这两个，毕竟他们的文章质量都很高。
  - [freecodecamp](https://www.freecodecamp.org/news/)
  - [hackernoon](https://hackernoon.com/)
- Youtube
  - Youtube 有很多高质量的视频，但是门槛大家都知道，这里我推荐一些值得订阅的频道。
  - [JSConf](https://www.youtube.com/channel/UCzoVCacndDCfGDf41P-z0iA)，很多会议的视频你都可以在这里找到。
  - [Google Chrome Developers](https://www.youtube.com/channel/UCnUYZLuoy1rq1aVMwx4aTzw)，Google 金字招牌，没啥好说的。
  - [Computerphile](https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA)，内容偏向于计算机领域。
  - [Coding Tech](https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ/videos)，内容偏向于入门。
  - [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q?reload=9)，如果你想学习函数式编程的一些内容，这是一个值得订阅的频道。
  - [DevTips](https://www.youtube.com/user/DevTipsForDesigners/videos?reload=9)，每周更新一个视频，能够学习到不少开发中的 Tips。
- 其他
  - [互联网公司技术架构](https://github.com/davideuler/architecture.of.internet-product)，这份资料介绍了当下互联网公司的一个技术架构。
  - [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)，这份资料作者使用了 JS 来实现了大部分的数据结构和算法。
  - [小型编译器](https://github.com/jamiebuilds/the-super-tiny-compiler)，这份资料告诉了我们该如何去实现一个小型的编译器，很适合前端开发者阅读。
  - [every-programmer-should-know](https://github.com/mtdvio/every-programmer-should-know)，这份资料列举了很多每个开发者都应该知道的知识点。-
