// 非热门 非常用 排序放在最后

module.exports = function genSidebarConfig(lang) {
  const t = require('../locales')(lang);
  return {
    '/news/': [
      {
        title: t['news'],
        collapsable: true,
        children: [
          '',
        ]
      },
    ],
    '/topic/': [
      // 不做前端后端这样的工种分类，应按知识点去分类
      // 如 html css 网络相关 性能相关 Web 安全 数据库 数据结构与算法 等，这样感兴趣就可以展开去阅读
      {
        title: t['topic'],
        collapsable: false,
        children: [
          // ['', '介绍'],
          '',
          'do-you-know/',
          // 基础
          'html/',
          'css/',
          'javascript/',
          'miniapp/',
          'git/',
          'npm/',
          'vim/',
          'markdown/',
          'version/',
          'linux/',
          'browser/',
          'http/',
          // 前端
          'vue/',
          'react/',
          'rxjs/',
          // 'preact.html'
          'hybrid/',
          // 性能优化及分析
          'benchmark/',
          'performance/',
          'nodejs/',
          // 后端
          'nginx/',
          'database/',
          // 其他
          'image/',
          'awesome/',
          'algorithm/',
        ],
      },
    ],
    '/docs/': [
      {
        title: t['docs'],
        collapsable: true,
        children: [
          '',
          // 'frontend',
          // 'backend',
          // 'database',
        ],
      },
    ],
    // '/tags/': [
    //   {
    //     title: t['tags'],
    //     collapsable: true,
    //     children: [
    //       '',
    //     ]
    //   },
    // ],
    // '/tags',
    '/favorite/': [
      {
        title: t['favorite'],
        collapsable: true,
        children: [
          '',
        ]
      },
    ],
    // '/interview/': [
    //   {
    //     collapsable: true,
    //     children: [
    //       '',
    //       'questions/',
    //     ]
    //   },
    // ],
    // fallback
    // '/': [
    //   // ['', '首页'],        /* / */
    //   '',        /* / */
    //   'about',   /* /about.html */
    //   'contact', /* /contact.html */
    //   'weekly',  /* /weekly.html */
    // ],
  };
}
