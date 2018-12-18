# temp

其内容，一直想做个知识库，记录开发中的点点滴滴，并且收集各种常用的链接，使工作更便捷，同时也期望能够分享共享这些便捷

无论知识点还是文档，可以按照标签、话题分类知识点

每个话题下的每个知识点，可以设定标签，之后可以以标签汇聚分类，用于筛选知识点

这里需要一种在markdown里展示操作数据的形式

以下为关注方向，如开发流程

- 前后端分离开发流程
  - https://segmentfault.com/a/1190000009329474
  - https://segmentfault.com/a/1190000002413526
  - 契约优先（contract first） MockServer
- TDD 测试驱动开发

面试题
- https://leetcode.com/explore/featured/card/top-interview-questions-easy/
- https://www.baidu.com/s?ie=UTF-8&wd=star%E9%9D%A2%E8%AF%95%E6%B3%95
  - https://github.com/fex-team/interview-questions
- https://github.com/huruji/FE-Interview
- https://github.com/helloqingfeng/Awsome-Front-End-learning-resource
- https://github.com/yangshun/tech-interview-handbook
- https://github.com/khan4019/front-end-Interview-Questions
- https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/README.md
- https://github.com/h5bp/Front-end-Developer-Interview-Questions
- https://github.com/yangshun/tech-interview-handbook/blob/master/preparing/cheatsheet.md

- https://hit-alibaba.github.io/interview/index.html
- https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/Translations/Chinese/README.md
- https://github.com/qiu-deqing/FE-interview
- https://github.com/MaximAbramchuck/awesome-interview-questions
- https://github.com/jimuyouyou/node-interview-questions
- https://github.com/paddingme/Front-end-Web-Development-Interview-Question
- https://github.com/monklof/Back-End-Developer-Interview-Questions




```html
<body>
```

https://github.com/sqrthree/vuepress-theme-api/blob/master/components/CURL/index.vue

<mermaid>
graph TD
  release -->|发布| master(test)
  release -->|新需求| dev_xxx(Go shopping)
  B --> C{Let me}
  C -->|Two| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>
<mermaid>
graph TB
  c1-->a2
  subgraph 主干分支
  release-->a2
  end
  subgraph 开发分支
  b1-->b2
  end
  subgraph Hotfix
  c1-->c2
  end
</mermaid>
<mermaid>
sequenceDiagram
  participant Hotfix
  participant Release
  Note right of Release: tag v1.0.0
  Release->>Dev_1: 新需求1
  Note right of Dev_1: 新需求就新建开发分支
  loop 开发周期1
    Dev_1->>Dev_1: 功能点
  end
  Release->>Hotfix: 线上问题!
  Note left of Hotfix: 问题修复<br/>专用分支hotfix
  Release->>Dev_2: 新需求2
  Hotfix-->>Hotfix: fixed xxx
  Release-->>Hotfix: 要经常同步Release
  Hotfix->>Release: 修复上线!
  Release-->>Release: 发布
  Note right of Release: tag v1.0.1
  Dev_1-x Release: 未同步最新，潜在风险
  Release-->>Dev_1: 要经常同步Release
  Dev_1->>Release: 需求1测试完，pull request
  Release-->>Release: 发布
  Note right of Release: tag v1.1.0
  Release->>Hotfix: 线上问题2!
  Hotfix-->>Hotfix: fixed xxx
  Release-->>Hotfix: 要经常同步Release
  Hotfix->>Release: 修复上线!
  Release-->>Release: 发布
  Note right of Release: tag v1.1.1
  Release-->>Dev_2: 要经常同步Release
  loop 开发周期2
    Dev_2->>Dev_2: 功能点
  end
  Dev_2-x Release: 未同步最新，潜在风险
  Release-->>Dev_2: 要经常同步Release
  Dev_2->>Release: 需求2测试完，pull request
  Release-->>Release: 发布
  Note right of Release: tag v1.2.0
</mermaid>

<mermaid>
gantt
  dateFormat     YYYY-MM-DD
  title 甘特图
  section 服务端
  功能1           :a1, 2014-01-01, 30d
  功能2           :after a1  , 20d
  section 设计稿
  功能1           :a1, 2014-01-01, 30d
  功能2           :after a1  , 20d
  section 客户端
  功能1           :2014-01-12, 12d
  功能1           : 24d
</mermaid>

<mermaid>
gantt
  dateFormat     YYYY-MM-DD
  title 甘特图
  section A section
  Completed task            :done,    des1, 2014-01-06,2014-01-08
  Active task               :active,  des2, 2014-01-09, 3d
  Future task               :         des3, after des2, 5d
  Future task2              :         des4, after des3, 5d
  section Critical tasks
  Completed task in the critical line :crit, done, 2014-01-06,24h
  Implement parser and jison          :crit, done, after des1, 2d
  Create tests for parser             :crit, active, 3d
  Future task in critical line        :crit, 5d
  Create tests for renderer           :2d
  Add to mermaid                      :1d
  section Documentation
  Describe gantt syntax               :active, a1, after des1, 3d
  Add gantt diagram to demo page      :after a1  , 20h
  Add another diagram to demo page    :doc1, after a1  , 48h
  section Last section
  Describe gantt syntax               :after doc1, 3d
  Add gantt diagram to demo page      :20h
  Add another diagram to demo page    :48h
</mermaid>

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


<!-- list:
- title: HTML
  logo: icons/html.svg
  link: /topic/html/
- title: CSS
  logo: icons/css.svg
  link: /topic/css/
- title: JavaScript
  logo: icons/javascript.svg
  link: /topic/javascript/
- title: NodeJS
  logo: icons/nodejs.svg
  link: /topic/nodejs/
- title: 小程序
  logo: icons/miniapp.svg
  link: /topic/miniapp/
- title: Git
  logo: icons/git.svg
  link: /topic/git/
- title: Vue
  logo: icons/vue.svg
  link: /topic/vue/
- title: React
  logo: icons/react.svg
  link: /topic/react/
- title: RxJS
  logo: icons/rxjs.svg
  link: /topic/rxjs/
- title: Promise
  logo: icons/promise.svg
  link: /topic/promise/
- title: 浏览器
  logo: icons/browser.svg
  link: /topic/browser/
- title: 性能
  logo: icons/performance.svg
  link: /topic/performance/
- title: 安全
  logo: icons/safety.svg
  link: /topic/safety/
- title: 框架
  logo: icons/framework.svg
  link: /topic/framework/ -->

