
module.exports = function genNavConfig(lang) {
  const t = require('../locales')(lang);
  return [
    {
      text: t['news'],
      link: '/news/',
    },
    {
      text: t['topic'],
      link: '/topic/'
    },
    // {
    //   text: t['docs'],
    //   link: '/docs/',
    // },
    // {
    //   text: t['book'],
    //   link: '/book/'
    // },
    // {
    //   text: t['favorite'],
    //   link: '/favorite/'
    // },
    // {
    //   text: t['tags'],
    //   link: '/tags/'
    // },
    // {
    //   text: t['code'],
    //   link: '/code/'
    // },
    {
      text: t['interview'],
      link: '/interview/'
    },
    // todo 放在资讯的右侧主内容区域
    // {
    //   text: t['todo'],
    //   link: '/todo/'
    // },
    // {
    //   text: t['community'],
    //   link: '/community/'
    // },
    // {
    //   text: t['neitui'],
    //   link: '/neitui/'
    // },
    {
      text: t['more'],
      items: [
        {
          // text: '关于',
          // link: '/about/about.html', // 此处无效
          items: [
            {
              text: t['about'],
              link: '/about/about.html'
            },
            {
              text: t['contact'],
              link: '/about/contact.html'
            },
            {
              text: t['work'],
              link: '/about/work.html'
            },
            {
              text: t['weekly'],
              link: '/about/weekly.html'
            },
            {
              text: t['faq'],
              link: '/faq/',
            },
            {
              text: t['glossary'],
              link: '/about/glossary.html'
            },
          ],
        },
        {
          text: t['other'],
          items: [
            {
              text: t['changelog'],
              link: 'https://github.com/kitdocs/kitdocs.org/blob/dev/CHANGELOG.md'
            },
          ],
        },
      ],
    },
  ];
};
