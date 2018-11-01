module.exports = [
  {
    text: '资讯',
    link: '/news/',
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
  // {
  //   text: '收藏',
  //   link: '/favorite/'
  // },
  // {
  //   text: '标签',
  //   link: '/tags/'
  // },
  // {
  //   text: '代码片段',
  //   link: '/code/'
  // },
  // {
  //   text: '问题',
  //   link: '/questions/'
  // },
  // {
  //   text: '社区',
  //   link: '/community/'
  // },
  // {
  //   text: '内推',
  //   link: '/neitui/'
  // },
  {
    text: '了解更多',
    items: [
      {
        text: '关于我们',
        // link: '/about/about.html', // 此处无效
        items: [
          {
            text: '联系我们',
            link: '/about/contact.html'
          },
          {
            text: '工作机会',
            link: '/about/work.html'
          },
          {
            text: '每周计划',
            link: '/about/weekly.html'
          },
          {
            text: 'FAQ',
            link: '/faq/',
          },
          {
            text: '术语',
            link: '/about/glossary.html'
          },
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/kitdocs/kitdocs.org/blob/dev/CHANGELOG.md'
          }
        ]
      }
    ]
  }
]
