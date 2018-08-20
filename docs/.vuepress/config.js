
const locales = {
  'zh-CN': {
    site: {
      lang: 'zh-CN',
      title: 'KitDocs.org',
      description: '致力于提供一个好用的知识文档库',
    },
    news: '资讯',
    topic: '知识库',
    docs: '开发文档',
    community: '社区',
    favorite: '收藏夹',
  },
  // 'en': {
  //   site: {
  //     lang: 'en-US',
  //     title: 'KitDocs.org',
  //     description: 'Dedicated to Docs and its awesome community'
  //   },
  //   news: 'news',
  //   topic: 'topic',
  //   docs: 'docs',
  //   community: 'community',
  // },
}

module.exports = {
  dest: 'dist',
  locales: {
    '/': locales['zh-CN'].site,
    // '/en': locales['en'].site,
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  // theme: 'ads',
  themeConfig: {
    // repo: 'kitdocs/kitdocs.org',
    lastUpdated: 'Last Updated', // string | boolean
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '资讯',
            link: '/news/'
          },
          {
            text: '知识库',
            link: '/topic/'
          },
          // {
          //   text: '开发文档',
          //   link: '/docs/',
          // },
          // {
          //   text: '书籍',
          //   link: '/book/'
          // },
          {
            text: '收藏夹',
            link: '/favorite/'
          },
          {
            text: '社区',
            link: '/community/'
          },
        ],
        sidebar: {
          ...genSidebarConfig('zh-CN')
        },
      },
      // '/en': {
      //   label: 'English',
      //   selectText: 'Languages',
      //   editLinkText: 'Edit this page on GitHub',
      //   nav: [
      //     {
      //       text: 'news',
      //       link: '/news/'
      //     },
      //     {
      //       text: 'topic',
      //       link: '/topic/'
      //     },
      //     {
      //       text: 'docs',
      //       link: '/docs/',
      //     },
      //     // {
      //     //   text: 'book',
      //     //   link: '/book/'
      //     // },
      //     {
      //       text: 'community',
      //       link: '/community/'
      //     },
      //   ],
      //   sidebar: {
      //     ...genSidebarConfig('zh-CN')
      //   },
      // },
    }
  }
}

function genSidebarConfig(lang) {
  const t = locales[lang];
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
          '',
          'miniapp/',
          'git/',
          'html/',
          'css/',
          'javascript/',
          'nodejs/',
          'ECMAScript/',
          'promise/',
          'vue/',
          'algorithm/',
          'benchmark/',
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
    '/favorite/': [
      {
        title: t['favorite'],
        collapsable: true,
        children: [
          '',
        ]
      },
    ],
    // fallback
    '/': [
      '',        /* / */
      'contact', /* /contact.html */
      'about'    /* /about.html */
    ],
  };
}
