# MarkDown

https://guides.github.com/features/mastering-markdown/
https://github.github.com/gfm/#what-is-github-flavored-markdown-

Emoji Cheat Sheet - https://www.webfx.com/tools/emoji-cheat-sheet/

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

https://www.npmjs.com/package/vuepress-theme-resume
https://www.npmjs.com/package/vuepress-theme-yubisaki
https://www.npmjs.com/package/vuepress-theme-craftdocs
https://www.npmjs.com/package/vuepress-theme-bulma
https://www.npmjs.com/package/vuepress-theme-blogue
https://www.npmjs.com/package/vuepress-theme-meteorlxy
https://github.com/yliaho/vuepress-theme-valle
https://github.com/FriendlyUser/vuepress-theme-cool
https://www.npmjs.com/package/vuepress-theme-api

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
