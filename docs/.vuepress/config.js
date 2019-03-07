const path = require('path')
const container = require('markdown-it-container')

const lang = 'zh-CN'
const locales = require('./locales')(lang);
const genNav = require('./config/nav');
const genSidebar = require('./config/sidebar');

module.exports = ctx => ({
  dest: 'dist',
  locales: {
    '/': {
      lang: locales.lang,
      title: locales.title,
      description: locales.description,
    },
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
  // theme: '',
  themeConfig: {
    sidebarDepth: 1,
    toc: {
      includeLevel: [2, 3],
    },
    repo: 'kitdocs/kitdocs.org',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    algolia: ctx.isProd ? ({
      apiKey: 'e6bcd0241fa598b7462a1b6c542e979b',
      indexName: 'kitdocs.org',
    }) : null,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: genNav(lang),
        // sidebar: {
        //   '/news/': getGuideSidebar('指南', '深入'),
        //   '/topic/': getPluginSidebar('插件', '介绍'),
        //   // '/theme/': getThemeSidebar('主题', '介绍'),
        // },
        sidebar: genSidebar(lang),
      },
    },
  },
  // 自带4个
    // @vuepress/plugin-active-header-links @vuepress/plugin-last-updated @vuepress/plugin-register-components @vuepress/plugin-search
    // yarn add @vuepress/plugin-medium-zoom@next @vuepress/plugin-notification@next @vuepress/plugin-pwa@next @vuepress/plugin-i18n-ui@next @vuepress/plugin-pagination@next @vuepress/plugin-google-analytics@next @vuepress/plugin-back-to-top@next --dev
  plugins: [
    // ['@vuepress/i18n-ui', !ctx.isProd],
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      // updatePopup: true,
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
      },
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/notification', true],
    // ['@vuepress/google-analytics', {
    //   ga: ''
    // }],
    ['@vuepress/pagination', true],
    // ['@vuepress/pagination', {
    //   postsFilter: ({ type }) => type === 'post',
    //   postsSorter: (prev, next) => {
    //     const prevTime = new Date(prev.frontmatter.date).getTime()
    //     const nextTime = new Date(next.frontmatter.date).getTime()
    //     return prevTime - nextTime > 0 ? -1 : 1
    //   },
    // }],
    ['@vuepress/last-updated', true],
    // [
    //   '@vuepress/last-updated',
    //   {
    //     transformer: (timestamp, lang) => {
    //       // 不要忘了安装 moment
    //       const moment = require('moment')
    //       moment.locale(lang)
    //       return moment(timestamp).fromNow()
    //     }
    //   }
    // ],
    // clientRootMixin: path.resolve(__dirname, 'mixin.js'),
    // extendMarkdown (md) {
    //   md.use(container, 'upgrade', {
    //     render: (tokens, idx) => tokens[idx].nesting === 1
    //       ? `<UpgradePath title="${tokens[idx].info.trim().slice('upgrade'.length).trim()}">`
    //       : '</UpgradePath>'
    //   })
    // },
  ],
  // clientRootMixin: path.resolve(__dirname, 'mixin.js')
  chainWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    config.module
      .rule('webp')
      .test(/\.webp$/)
      .use('webp-loader')
        .loader('webp-loader')
        .end()

    config.module
      .rule('webp')
      .test(/\.webp$/)
      .use('file-loader')
        .loader('file-loader')
        .end()
  },
  markdown: {
    config: md => {
      md.set({ breaks: true })
      // md.use(require('markdown-it-mark'))
      // md.use(require('markdown-it-checkbox'))
      // md.use(require('markdown-it-deflist'))
      // md.use(require("markdown-it-katex"))
      // md.use(require("markdown-it-plantuml"))
      md.use(require("markdown-it-table-of-contents"))

      // md.use(require('markdown-it-prettier'))
      // // md.use(require('markdown-it-mathjax'))
      // md.use(require('markdown-it-highlightjs'))
      // md.use(require("markdown-it-mermaid"), {

      // })
      // https://stackedit.io/app#
      // https://www.npmjs.com/package/katex
      // md.use(require('katex'))
      // https://www.npmjs.com/package/mermaid
      // md.use(require('mermaid'))
      // https://mermaidjs.github.io/gantt.html
      // md.use(require('markdown-it-mermaid-pro'))
      // md.use(require('@iktakahiro/markdown-it-katex'))
    }
  },
});

