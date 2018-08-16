module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'KitDocs.org',
      description: '致力于提供最新最全的文档库'
    },
    '/en': {
      lang: 'en-US',
      title: 'KitDocs.org',
      description: 'Dedicated to Docs and its awesome community'
    },
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
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '最新资讯',
            link: '/news/'
          },
          {
            text: '开发文档',
            link: '/docs/',
          },
          {
            text: '社区',
            link: '/community/'
          },
          {
            text: '面试题库',
            link: '/interview/'
          },
          // {
          //   text: '我的收藏',
          //   link: '/favorite/'
          // },
        ],
        sidebar: {
          '/docs/': genSidebarConfig('开发文档')
        },
      },
      '/en': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'news',
            link: '/news/'
          },
          {
            text: 'docs',
            link: '/docs/',
          },
          {
            text: 'community',
            link: '/community/'
          },
          {
            text: 'interview',
            link: '/interview/'
          },
        ],
        sidebar: {
          '/docs/': genSidebarConfig('docs')
        },
      },
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '/docs/',
        // '/docs/vue',
        // '/docs/',
        // '/docs/vue',
      ]
    },
  ]
}
