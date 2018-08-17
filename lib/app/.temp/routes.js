import Vue from 'vue'
Vue.component("LayoutDocs", () => import("/Users/dwd/github/kitdocs/kitdocs.org/docs/.vuepress/components/LayoutDocs.vue"))

import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/README.md").then(comp => {
        Vue.component("page-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: "/about.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/about.md").then(comp => {
        Vue.component("page-about", comp.default)
        next()
      })
    }
  },
  {
    path: "/cantact.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/cantact.md").then(comp => {
        Vue.component("page-cantact", comp.default)
        next()
      })
    }
  },
  {
    path: "/community/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/community/README.md").then(comp => {
        Vue.component("page-community-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/community/index.html",
    redirect: "/community/"
  },
  {
    path: "/docs/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/docs/README.md").then(comp => {
        Vue.component("page-docs-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/docs/index.html",
    redirect: "/docs/"
  },
  {
    path: "/news/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/news/README.md").then(comp => {
        Vue.component("page-news-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/news/index.html",
    redirect: "/news/"
  },
  {
    path: "/topic/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/topic/README.md").then(comp => {
        Vue.component("page-topic-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/topic/index.html",
    redirect: "/topic/"
  },
  {
    path: "/topic/css/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/topic/css/readme.md").then(comp => {
        Vue.component("page-topic-css-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/topic/css/index.html",
    redirect: "/topic/css/"
  },
  {
    path: "/topic/html/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/topic/html/readme.md").then(comp => {
        Vue.component("page-topic-html-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/topic/html/index.html",
    redirect: "/topic/html/"
  },
  {
    path: "/topic/javascript/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/dwd/github/kitdocs/kitdocs.org/docs/topic/javascript/readme.md").then(comp => {
        Vue.component("page-topic-javascript-index", comp.default)
        next()
      })
    }
  },
  {
    path: "/topic/javascript/index.html",
    redirect: "/topic/javascript/"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]