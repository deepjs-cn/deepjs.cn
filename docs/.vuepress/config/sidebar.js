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
      {
        title: t['topic'],
        collapsable: true,
        children: [
          // ['', '介绍'],
          '',
          'do-you-know/',
          // 常用
          'vue/',
          'react/',
          'git/',
          'npm/',
          'vim/',
          'nginx/',
          'nodejs/',
          'database/',
          // 性能优化及分析
          'benchmark/',
          'performance/',
          // 基础
          'html/',
          'css/',
          'javascript/',
          'miniapp/',
          // 'ECMAScript/',
          'algorithm/',
          // 常识辅助
          'hybrid/',
          'markdown/',
          'awesome/',
          'image/',
          'version/',
          // 'test/',
          // 'vim/',
          // 'nodejs/',
          // 'rxjs/',
          // 'linux/',
          // 'browser/',
          // 'http/',
        ]
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
        ]
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
