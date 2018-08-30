/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4bb98f36876075cbdb459df874c4624c"
  },
  {
    "url": "about.html",
    "revision": "7b4c1a89d51a0aad3b79823c86e4585b"
  },
  {
    "url": "assets/css/0.styles.3a9e6202.css",
    "revision": "3d09122d9cf909d19f320809e2b0c322"
  },
  {
    "url": "assets/img/2015120901.3bc9d5f2.png",
    "revision": "3bc9d5f2c49a713c776e69676d7d56c5"
  },
  {
    "url": "assets/img/h5-mobile.20e9e482.jpg",
    "revision": "20e9e482aaa376c551390fd55a562f30"
  },
  {
    "url": "assets/img/my-gitflow.9a813aa6.png",
    "revision": "9a813aa64855444042fbf5abfaf3f0d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stalled-request-series.a350df40.png",
    "revision": "a350df4015d1f0ecf2ab6c6145021660"
  },
  {
    "url": "assets/img/timing-overview.7e63b017.png",
    "revision": "7e63b0174961f257d375e7f12ca790fe"
  },
  {
    "url": "assets/js/10.208f6fd4.js",
    "revision": "b519b589ff911e6fc30fe4aa9e9b2648"
  },
  {
    "url": "assets/js/11.d396a558.js",
    "revision": "4d06105f608a25c2f7e84813d1d34e5e"
  },
  {
    "url": "assets/js/12.b2127b02.js",
    "revision": "36fe3f7233d84d8b6a04cd4371dafae5"
  },
  {
    "url": "assets/js/13.858d2c5c.js",
    "revision": "90cf752d409a48a5b12c2bee82f2612c"
  },
  {
    "url": "assets/js/14.f2ff65f3.js",
    "revision": "411a311009dcb3a2e2b7bc597f6f56a0"
  },
  {
    "url": "assets/js/15.4da54405.js",
    "revision": "4b2914f11226ba9473fc983b0be12996"
  },
  {
    "url": "assets/js/16.1975f027.js",
    "revision": "11cc0e2d35e4a0878ce4402bb7aaa2fd"
  },
  {
    "url": "assets/js/17.da22f7d4.js",
    "revision": "445ae6368d95fc33bcd5fb551f89481a"
  },
  {
    "url": "assets/js/18.c92ba5a1.js",
    "revision": "18e413adc5977f4494674a1a24de3575"
  },
  {
    "url": "assets/js/19.3e1ab632.js",
    "revision": "239e5fa4403fccdf8d7294deeb2100d8"
  },
  {
    "url": "assets/js/2.1f3fad8a.js",
    "revision": "64034156f961b855aad7b0480521554a"
  },
  {
    "url": "assets/js/20.b7b48fad.js",
    "revision": "642586408c58ff918f6060c3929d4b9c"
  },
  {
    "url": "assets/js/21.a7e2aa26.js",
    "revision": "28ee5517cd447a9c63e05484abf43acd"
  },
  {
    "url": "assets/js/22.f1f1d55a.js",
    "revision": "e0eee017e80972a03b1f5d02815ff151"
  },
  {
    "url": "assets/js/23.8b93076d.js",
    "revision": "09464ccbe9af89284a51b51151bb1cff"
  },
  {
    "url": "assets/js/24.11494ac8.js",
    "revision": "7cb5735de112e5faa1cfcf3918380baa"
  },
  {
    "url": "assets/js/25.eb5c8a24.js",
    "revision": "5a0d0b544c4c4c19d4c3b760a3e839f8"
  },
  {
    "url": "assets/js/26.53d7e9db.js",
    "revision": "78af13b3efc47a3359344c30b9a87eef"
  },
  {
    "url": "assets/js/27.a57c4d03.js",
    "revision": "8b2ddda9f9e852208c9750dd10abd1e6"
  },
  {
    "url": "assets/js/28.93ddfe0b.js",
    "revision": "ea67cc9ffcf3e082b16e142bc5f16afd"
  },
  {
    "url": "assets/js/29.06c374c6.js",
    "revision": "bd0bcefc7816b441cc53b9d3ed8000fa"
  },
  {
    "url": "assets/js/3.91f30955.js",
    "revision": "c9e7de08b4301c36c244980a826cc814"
  },
  {
    "url": "assets/js/30.6b07ca8e.js",
    "revision": "62e2f55e126bd6f582858cd950cad5ea"
  },
  {
    "url": "assets/js/31.b6038a4a.js",
    "revision": "7a947cf2d028e0c1ecd23248166e594f"
  },
  {
    "url": "assets/js/32.36cbac64.js",
    "revision": "50f7f6556eb73a091c393084c9795066"
  },
  {
    "url": "assets/js/33.947c3d28.js",
    "revision": "ff7de5bf8573bd68ace064d61ecd5325"
  },
  {
    "url": "assets/js/34.845055c9.js",
    "revision": "79559a164fa755845521b04c9e83cf0f"
  },
  {
    "url": "assets/js/35.b24acc31.js",
    "revision": "c3c38c4499a30f142878c3907a0c6a2f"
  },
  {
    "url": "assets/js/36.0b9a9b9f.js",
    "revision": "4e48fbabda72828813884416184891e4"
  },
  {
    "url": "assets/js/37.8ed9868c.js",
    "revision": "5b9b366ac45eafa1a68041798d859631"
  },
  {
    "url": "assets/js/38.cbaf36a4.js",
    "revision": "96b615eaf70725044e631ae7bea95e55"
  },
  {
    "url": "assets/js/39.cd9ae532.js",
    "revision": "3e2c41de9a6cb6b74e254358d67810d8"
  },
  {
    "url": "assets/js/4.cffa168a.js",
    "revision": "a3f6e1ed50db8f3bf1691b4c8bd8e914"
  },
  {
    "url": "assets/js/40.89a4036b.js",
    "revision": "133a848b4ddb8f978c44e07c514989e7"
  },
  {
    "url": "assets/js/41.1cad646a.js",
    "revision": "5d776c293870bdd29caf9d4f28101c7e"
  },
  {
    "url": "assets/js/42.b3039580.js",
    "revision": "dbced4346126b385591c9811519060ce"
  },
  {
    "url": "assets/js/43.06c9993a.js",
    "revision": "c6096ecb32b47ef4d74fb6c238495bf6"
  },
  {
    "url": "assets/js/44.28133afd.js",
    "revision": "eff8c8f10a767e749f622549ef2a8675"
  },
  {
    "url": "assets/js/45.b16cf3b6.js",
    "revision": "b874f686c4b9fbed3a79b2a9c9e0208c"
  },
  {
    "url": "assets/js/46.5135e29d.js",
    "revision": "a37d436ee359721c5efe314ae123d009"
  },
  {
    "url": "assets/js/47.7a2388da.js",
    "revision": "8dbf3eec2d2ca51a10b5ae08381ca28d"
  },
  {
    "url": "assets/js/48.1153fa41.js",
    "revision": "d2e4e46593b03130ee227235bf9f1779"
  },
  {
    "url": "assets/js/49.3fd46915.js",
    "revision": "d6c9339d35805721e4241c8d2a346b27"
  },
  {
    "url": "assets/js/5.71c75ded.js",
    "revision": "d3226151423513031b933cb01049cf0c"
  },
  {
    "url": "assets/js/50.06d9b0f4.js",
    "revision": "2e0060cb7b9b53ea39f46a3c4c606a01"
  },
  {
    "url": "assets/js/51.4956d81a.js",
    "revision": "a51452ec9807f4f641aedb8e21e683b3"
  },
  {
    "url": "assets/js/53.68595065.js",
    "revision": "5dee45c0b04f14cd78809194f7bebf6d"
  },
  {
    "url": "assets/js/6.ddbb9b6a.js",
    "revision": "5cf84cd8efd3800716ee3a7b9519167b"
  },
  {
    "url": "assets/js/7.e1b4c53e.js",
    "revision": "5708b99644f91beefe3c4fb136826ed9"
  },
  {
    "url": "assets/js/8.9da9239f.js",
    "revision": "de755cd09b103a7076eb9b0ae364afb8"
  },
  {
    "url": "assets/js/9.795c60ef.js",
    "revision": "58cb5fcc090d320b157e278d3b8e0d6d"
  },
  {
    "url": "assets/js/app.13c3da71.js",
    "revision": "3fdd6a0ec597555b8887e3617bb639a3"
  },
  {
    "url": "assets/js/vendors~docsearch.7b508205.js",
    "revision": "3c46f3d1780a571107afdc51081fc513"
  },
  {
    "url": "community/index.html",
    "revision": "9316e62ce7466441b5c7ca38bb409ae4"
  },
  {
    "url": "contact.html",
    "revision": "3170223f07707af6b324e61c9ac031c5"
  },
  {
    "url": "docs/index.html",
    "revision": "d95e8b12d7199b41eb4b6a69ad005160"
  },
  {
    "url": "favorite/index.html",
    "revision": "ea0b3663622567deb03da569d6b4eecd"
  },
  {
    "url": "help.html",
    "revision": "55559397cd4459a626464f823c78a45c"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "594f967ee73697fc7bc6302b62bca3a3"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "neitui/index.html",
    "revision": "26bcc1f47e0457ddcfa6920d4a031319"
  },
  {
    "url": "news/index.html",
    "revision": "67ba37ac773be2c7f28c6d37d1161b56"
  },
  {
    "url": "tags/index.html",
    "revision": "5f05e834433a1c02cd8873adf1ad0a21"
  },
  {
    "url": "topic/algorithm/index.html",
    "revision": "0a61d472181bc87cce01e64c197392dc"
  },
  {
    "url": "topic/algorithm/sku.html",
    "revision": "54d0869f60d4ed974d2c4581d5de6108"
  },
  {
    "url": "topic/android/index.html",
    "revision": "296ca2850f8d06c7d3f011c6be7bf234"
  },
  {
    "url": "topic/benchmark/index.html",
    "revision": "11c248a321626cdffd7fedfabe8f5839"
  },
  {
    "url": "topic/browser/index.html",
    "revision": "3c6b6bf6bd47b399c60f65fa1fbf8f4f"
  },
  {
    "url": "topic/css/index.html",
    "revision": "cb144265d770f25502ec2488e17eb22b"
  },
  {
    "url": "topic/ECMAScript/index.html",
    "revision": "dc0845032268589c6e4568526ba1877c"
  },
  {
    "url": "topic/git/git.html",
    "revision": "6a933541b34a2c9b5fc97b41833f68b4"
  },
  {
    "url": "topic/git/index.html",
    "revision": "d12e6a403d9424830a80e54fd4ecac0c"
  },
  {
    "url": "topic/git/temp.html",
    "revision": "8a1a7f8b6e78064c60f5e21fcb1c132c"
  },
  {
    "url": "topic/html/index.html",
    "revision": "2cad6b793a2e74906c0dc14aacfdd93e"
  },
  {
    "url": "topic/http/http2.html",
    "revision": "012072ae388dddecc47976a799495253"
  },
  {
    "url": "topic/http/index.html",
    "revision": "8f56006eede0b2fbf4ef6289e623961a"
  },
  {
    "url": "topic/index.html",
    "revision": "8eb7f9f48d880e5d1c75a973b66aef58"
  },
  {
    "url": "topic/ios/index.html",
    "revision": "dccc4defadd78e67878a6ce22e9d306f"
  },
  {
    "url": "topic/javascript/clear.html",
    "revision": "e4710f02391c00febf575f382196e4ec"
  },
  {
    "url": "topic/javascript/index.html",
    "revision": "9d632574816f97e88b794f6a646b8297"
  },
  {
    "url": "topic/javascript/puzzlers.html",
    "revision": "c69ef0fa17ba1edb6fc2cc190f2a11da"
  },
  {
    "url": "topic/leetcode/index.html",
    "revision": "9ac37ed7ff1fbf14188d44379f8d6359"
  },
  {
    "url": "topic/linux/index.html",
    "revision": "c413a4868714d326a8088b7f710818ed"
  },
  {
    "url": "topic/markdown/index.html",
    "revision": "228d2151c3f8fb7009605485922678c8"
  },
  {
    "url": "topic/miniapp/aliapp.html",
    "revision": "57517b08afe2c5c8a5992be811cc6293"
  },
  {
    "url": "topic/miniapp/index.html",
    "revision": "5a4a2f3be6fef5e4635f4f84d814549a"
  },
  {
    "url": "topic/miniapp/wxapp.html",
    "revision": "91e9a879aa06b949ce12f17c26e00c10"
  },
  {
    "url": "topic/nodejs/action.html",
    "revision": "4fe2bf328fea600544b5711510ac8a47"
  },
  {
    "url": "topic/nodejs/api.html",
    "revision": "852883ba49f793cbd352cbd1ceab2fa7"
  },
  {
    "url": "topic/nodejs/index.html",
    "revision": "c5935045e115d91dbbc9da721676c07e"
  },
  {
    "url": "topic/performance/index.html",
    "revision": "134d60fa013658ae6a8597dd599dc665"
  },
  {
    "url": "topic/performance/network.html",
    "revision": "92f79494b3dd352abde6a17e737e884f"
  },
  {
    "url": "topic/performance/performance.html",
    "revision": "db8b2856ba414bcae4e343977d3f7d79"
  },
  {
    "url": "topic/rxjs/index.html",
    "revision": "2d071e2413a82a43c7f5d9fac37a5e97"
  },
  {
    "url": "topic/test/index.html",
    "revision": "e5cb04a34a3ee4e7c4d0defaae18c9ba"
  },
  {
    "url": "topic/vim/index.html",
    "revision": "78a5f8b36fa14bd18a41b133f23f7724"
  },
  {
    "url": "topic/vue/index.html",
    "revision": "38f2bae9d5506a87b3747b463714efda"
  },
  {
    "url": "weekly.html",
    "revision": "823dc405e602a98f6d4215ef1b770887"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
