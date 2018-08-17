export const siteData = {
  "title": "",
  "description": "",
  "base": "/",
  "pages": [
    {
      "path": "/",
      "lastUpdated": 1525225000000,
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroImage": "/hero.png",
        "actionText": "去看看 →",
        "actionLink": "/docs/",
        "features": [
          {
            "title": "简洁至上",
            "details": "排版清晰，一目明了。"
          },
          {
            "title": "Vue驱动",
            "details": "快速直达，操作便捷。"
          },
          {
            "title": "高性能",
            "details": "静态化，以 SPA 运行。"
          }
        ],
        "footer": "Copyright © 2018-present cloudyan"
      }
    },
    {
      "path": "/about.html",
      "lastUpdated": null,
      "title": "关于我们"
    },
    {
      "path": "/cantact.html",
      "lastUpdated": null,
      "title": "联系我们"
    },
    {
      "path": "/community/",
      "lastUpdated": null,
      "title": "社区",
      "headers": [
        {
          "level": 2,
          "title": "知乎",
          "slug": "知乎"
        },
        {
          "level": 2,
          "title": "掘金",
          "slug": "掘金"
        }
      ],
      "frontmatter": {
        "sidebar": "auto"
      }
    },
    {
      "path": "/docs/",
      "lastUpdated": null,
      "title": "开发文档",
      "headers": [
        {
          "level": 2,
          "title": "vue",
          "slug": "vue"
        },
        {
          "level": 2,
          "title": "haha",
          "slug": "haha"
        }
      ],
      "frontmatter": {
        "layout": "LayoutDocs",
        "sidebar": false,
        "heroImage": "/hero.png",
        "actionText": "去看看 →",
        "actionLink": "/docs/",
        "features": [
          {
            "title": "简洁至上",
            "details": "排版清晰，一目明了。"
          },
          {
            "title": "Vue驱动",
            "details": "快速直达，操作便捷。"
          },
          {
            "title": "高性能",
            "details": "静态化，以 SPA 运行。"
          }
        ],
        "footer": "Copyright © 2018-present cloudyan"
      }
    },
    {
      "path": "/news/",
      "lastUpdated": null,
      "title": "资讯",
      "headers": [
        {
          "level": 2,
          "title": "Hacker News",
          "slug": "hacker-news"
        },
        {
          "level": 2,
          "title": "infoQ",
          "slug": "infoq"
        }
      ],
      "frontmatter": {
        "sidebar": false
      }
    },
    {
      "path": "/topic/",
      "lastUpdated": null,
      "title": "说明"
    },
    {
      "path": "/topic/css/",
      "lastUpdated": null,
      "title": "CSS"
    },
    {
      "path": "/topic/html/",
      "lastUpdated": null,
      "title": "HTML",
      "headers": [
        {
          "level": 2,
          "title": "问题",
          "slug": "问题"
        }
      ]
    },
    {
      "path": "/topic/javascript/",
      "lastUpdated": null,
      "title": "JavaScript"
    }
  ],
  "themeConfig": {
    "lastUpdated": "Last Updated",
    "editLinks": true,
    "docsDir": "docs",
    "locales": {
      "/": {
        "label": "简体中文",
        "selectText": "选择语言",
        "editLinkText": "在 GitHub 上编辑此页",
        "nav": [
          {
            "text": "资讯",
            "link": "/news/"
          },
          {
            "text": "知识点",
            "link": "/topic/"
          },
          {
            "text": "开发文档",
            "link": "/docs/"
          },
          {
            "text": "社区",
            "link": "/community/"
          }
        ],
        "sidebar": {
          "/news/": [
            {
              "title": "资讯",
              "collapsable": true,
              "children": [
                ""
              ]
            }
          ],
          "/topic/": [
            {
              "title": "知识点",
              "collapsable": true,
              "children": [
                "",
                "html/",
                "css/",
                "javascript/"
              ]
            }
          ],
          "/docs/": [
            {
              "title": "开发文档",
              "collapsable": true,
              "children": [
                ""
              ]
            }
          ],
          "/": [
            "",
            "contact",
            "about"
          ]
        }
      },
      "/en": {
        "label": "English",
        "selectText": "Languages",
        "editLinkText": "Edit this page on GitHub",
        "nav": [
          {
            "text": "news",
            "link": "/news/"
          },
          {
            "text": "topic",
            "link": "/topic/"
          },
          {
            "text": "docs",
            "link": "/docs/"
          },
          {
            "text": "community",
            "link": "/community/"
          }
        ],
        "sidebar": {
          "/news/": [
            {
              "title": "资讯",
              "collapsable": true,
              "children": [
                ""
              ]
            }
          ],
          "/topic/": [
            {
              "title": "知识点",
              "collapsable": true,
              "children": [
                "",
                "html/",
                "css/",
                "javascript/"
              ]
            }
          ],
          "/docs/": [
            {
              "title": "开发文档",
              "collapsable": true,
              "children": [
                ""
              ]
            }
          ],
          "/": [
            "",
            "contact",
            "about"
          ]
        }
      }
    }
  },
  "locales": {
    "/": {
      "lang": "zh-CN",
      "title": "KitDocs.org",
      "description": "致力于提供一个好用的知识文档库"
    },
    "/en": {
      "lang": "en-US",
      "title": "KitDocs.org",
      "description": "Dedicated to Docs and its awesome community"
    }
  }
}