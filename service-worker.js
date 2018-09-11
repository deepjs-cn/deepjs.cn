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
    "revision": "2335676e874b39949fe19145c3bb5aa8"
  },
  {
    "url": "about.html",
    "revision": "b1b6274158a783357424409a8fc6b97a"
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
    "url": "assets/js/10.85d71352.js",
    "revision": "6a581c4a52f34d364ab9d57c98381adf"
  },
  {
    "url": "assets/js/11.dcf2494b.js",
    "revision": "ae04653202f60f3d42588ca20c0434ff"
  },
  {
    "url": "assets/js/12.83ecd102.js",
    "revision": "df5266d1c3bda382befcbb6eefbf2e76"
  },
  {
    "url": "assets/js/13.0e7b456f.js",
    "revision": "a00ad9f1778e4c1438001e17aff3063c"
  },
  {
    "url": "assets/js/14.1b6ba2a5.js",
    "revision": "23f4326b57227e3e8fd04dc3fbf7cff9"
  },
  {
    "url": "assets/js/15.6969e853.js",
    "revision": "97e6d5dd35c8e293cd5f116e8930d6da"
  },
  {
    "url": "assets/js/16.d801d8e5.js",
    "revision": "317ddd6b6425d420b33bc17669d325a7"
  },
  {
    "url": "assets/js/17.80972ad8.js",
    "revision": "904bb7ebeb9e041a70dcefbb0c6fc0fd"
  },
  {
    "url": "assets/js/18.2896212d.js",
    "revision": "6cc656c429925c2b55ff25eaa0d29ec2"
  },
  {
    "url": "assets/js/19.81fdda1f.js",
    "revision": "f6f359b6969699d8f3c9306ab908ab8a"
  },
  {
    "url": "assets/js/2.6000bc56.js",
    "revision": "5d2aac1927fa4fc49f00c1a4a19837c7"
  },
  {
    "url": "assets/js/20.9c5d5c2d.js",
    "revision": "3205f886efb893dcc486bc2bf3b2f13c"
  },
  {
    "url": "assets/js/21.0af53d9e.js",
    "revision": "c384c3ddfda80fa052ce4cceb718530d"
  },
  {
    "url": "assets/js/22.bc4eb8de.js",
    "revision": "cbfa7bf6bef17ef97313f4943ddb3f48"
  },
  {
    "url": "assets/js/23.030e1910.js",
    "revision": "bb5bd3580240dd2ebc512ae1c4d65a0b"
  },
  {
    "url": "assets/js/24.7fbeb708.js",
    "revision": "a45a862bf2a90e7a0ffdb0067c435330"
  },
  {
    "url": "assets/js/25.aaf821cb.js",
    "revision": "8fbc4f485a603f10a32cf0815d9503fc"
  },
  {
    "url": "assets/js/26.b4e5a427.js",
    "revision": "e07471ee9e02b1c14c4a72b9921e2af2"
  },
  {
    "url": "assets/js/27.d4657fe4.js",
    "revision": "7787f6c404a0b86ef5973a9633f84057"
  },
  {
    "url": "assets/js/28.3a07fa20.js",
    "revision": "4ee85186d5f602b71d928e0a712fa610"
  },
  {
    "url": "assets/js/29.826ea754.js",
    "revision": "236b41a1984857c7f8627e69289354af"
  },
  {
    "url": "assets/js/3.27260abd.js",
    "revision": "5001943d6daf818f8080131693c9f546"
  },
  {
    "url": "assets/js/30.300fef95.js",
    "revision": "d3ace960d8930011f04908502bf8611f"
  },
  {
    "url": "assets/js/31.9b1facd7.js",
    "revision": "fd69a756b21f3a6484f0f84399e84987"
  },
  {
    "url": "assets/js/32.4fe8bbd9.js",
    "revision": "17c6a12cb9b572001f95d4048a0a1efc"
  },
  {
    "url": "assets/js/33.9c1a6fe5.js",
    "revision": "4079da79f04383c63604183029446ed2"
  },
  {
    "url": "assets/js/34.0a004253.js",
    "revision": "af67c6e14ef6645d2214a0d55c5af6c7"
  },
  {
    "url": "assets/js/35.45cd089d.js",
    "revision": "644f330902e71079c2c5bba3c43c65d1"
  },
  {
    "url": "assets/js/36.22ecaf9e.js",
    "revision": "d4c9542e6f231eb09f2eb26635e9c571"
  },
  {
    "url": "assets/js/37.b25fda5e.js",
    "revision": "34dbae841ec071492fe9c4038bdb8c82"
  },
  {
    "url": "assets/js/38.d248b499.js",
    "revision": "8a0fde3b2950d22a65e513df4700f492"
  },
  {
    "url": "assets/js/39.3bfb70e3.js",
    "revision": "11edbe8c0a67362c4f2ce5511528ed74"
  },
  {
    "url": "assets/js/4.e751873a.js",
    "revision": "88ecfb06f553502674a3cfa076d967c8"
  },
  {
    "url": "assets/js/40.7248135d.js",
    "revision": "7b6c52eb3f493c81bf5feb29f8f2a31a"
  },
  {
    "url": "assets/js/41.16387f7e.js",
    "revision": "00d3e1ac93c27587950f1ada7632f8c5"
  },
  {
    "url": "assets/js/42.586a6aab.js",
    "revision": "059b5e76b9036857fcebdc83d2f68376"
  },
  {
    "url": "assets/js/43.9427c1d5.js",
    "revision": "46db88a30bf7bc1bcfff94b169784203"
  },
  {
    "url": "assets/js/44.879dd879.js",
    "revision": "0a5e0a2452a74302f89be069d31bacaf"
  },
  {
    "url": "assets/js/45.4366b8a7.js",
    "revision": "2907957adb961ff3bf0a87386b5905aa"
  },
  {
    "url": "assets/js/46.4ab2fc8d.js",
    "revision": "c00ca3ec1df5ab2f45a83f3c166f1d91"
  },
  {
    "url": "assets/js/47.2d92dcc5.js",
    "revision": "4c7fa0cc2ce07de085435479ed0c19f1"
  },
  {
    "url": "assets/js/48.37f51539.js",
    "revision": "7b0b331e16a06474c5a958fd3b63ce5c"
  },
  {
    "url": "assets/js/49.40b36c61.js",
    "revision": "882ad814856f0d053f8a55ab271415f0"
  },
  {
    "url": "assets/js/5.3962af50.js",
    "revision": "8edfe82768f8b69d2634fd3b55433008"
  },
  {
    "url": "assets/js/50.67468080.js",
    "revision": "8f2137d4cd54d329d9f8475a91399206"
  },
  {
    "url": "assets/js/51.53da507e.js",
    "revision": "c7e51b57b0cd18f98779153c5fed4782"
  },
  {
    "url": "assets/js/52.d1c2e16b.js",
    "revision": "de66a93ef3fa1a23be0217b92d230809"
  },
  {
    "url": "assets/js/53.c0c3bb77.js",
    "revision": "72ac18edac4b2983a5a7b5122c5a2300"
  },
  {
    "url": "assets/js/55.9f16f92c.js",
    "revision": "91ac90e02eeef624f3245168c43dae20"
  },
  {
    "url": "assets/js/6.c70160d1.js",
    "revision": "de87f2d7eec500baa4caa74dbe5473e3"
  },
  {
    "url": "assets/js/7.a1092479.js",
    "revision": "8a1bd758e20777b64efe33cb23869905"
  },
  {
    "url": "assets/js/8.f5f34c6f.js",
    "revision": "0d4a9b24866bba197285f71caa47c4c3"
  },
  {
    "url": "assets/js/9.d38b761d.js",
    "revision": "fd069b2d6ea5d1db19b0ade048c670aa"
  },
  {
    "url": "assets/js/app.125519e1.js",
    "revision": "8c851633ca793bf540141d61fb15f13f"
  },
  {
    "url": "assets/js/vendors~docsearch.31a9d551.js",
    "revision": "edb5bfeed889f6a8623738aca291d949"
  },
  {
    "url": "community/index.html",
    "revision": "1bf5b5a4d5324eaca2760fa2df31a376"
  },
  {
    "url": "contact.html",
    "revision": "cb13223cf27b0841f03665ca56209d3e"
  },
  {
    "url": "docs/index.html",
    "revision": "289a0f5f619f8ee10d599f3c00c45c20"
  },
  {
    "url": "favorite/index.html",
    "revision": "02d3f3bffb5ad35ae32d3a542186d456"
  },
  {
    "url": "help.html",
    "revision": "bb0c494df4d2494b5398fb1140437ee3"
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
    "revision": "97de483c3f1ed1079309a90120e9acaf"
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
    "revision": "ba7aefcad629c689a49d58b365bc5de1"
  },
  {
    "url": "news/index.html",
    "revision": "800d4ec520c105950a719d967bb5cf02"
  },
  {
    "url": "tags/index.html",
    "revision": "701b8dc00f11a913690f6234d148f1d2"
  },
  {
    "url": "topic/algorithm/index.html",
    "revision": "0f08dd09742f27ddbf034156ded525e8"
  },
  {
    "url": "topic/algorithm/sku.html",
    "revision": "3f81aae7ca051bc37a8996e9e17a08b9"
  },
  {
    "url": "topic/android/index.html",
    "revision": "ce113d61d8ae56553d124c81618f4355"
  },
  {
    "url": "topic/benchmark/index.html",
    "revision": "614e01ecad95bbb6b6ca11fe831e43d0"
  },
  {
    "url": "topic/browser/index.html",
    "revision": "0abfe80cb7b26727b66ad42f3e2e397b"
  },
  {
    "url": "topic/css/index.html",
    "revision": "f9596f39de2dd9df3eeafe361bab090b"
  },
  {
    "url": "topic/ECMAScript/index.html",
    "revision": "2b2b9598af70a25c413e2f827fdd468a"
  },
  {
    "url": "topic/git/git.html",
    "revision": "97522600c62d1e686efd03a60b5f3962"
  },
  {
    "url": "topic/git/index.html",
    "revision": "d2257809c5f00a1fbee3af2fee77d040"
  },
  {
    "url": "topic/git/temp.html",
    "revision": "75b282f4fe3f038baba1f6ad3b5e37fc"
  },
  {
    "url": "topic/growth/index.html",
    "revision": "cf19d7d606693023538f30f813369d62"
  },
  {
    "url": "topic/html/index.html",
    "revision": "934d0effd55130a3f73ddf96d65f28ef"
  },
  {
    "url": "topic/http/http2.html",
    "revision": "551713548cf63e91c62f92c52c93fa7b"
  },
  {
    "url": "topic/http/index.html",
    "revision": "4406dcd2f705a92fcae502698b29a7e7"
  },
  {
    "url": "topic/index.html",
    "revision": "54c9b970be39f8be33e02c37f107de5f"
  },
  {
    "url": "topic/ios/index.html",
    "revision": "a33e3d693a0345d86f4c75209c2f7f99"
  },
  {
    "url": "topic/javascript/clear.html",
    "revision": "bd49c079d1dca429d38ac0532f215a8d"
  },
  {
    "url": "topic/javascript/index.html",
    "revision": "87ee95f1b36993f7c94fee67059e359b"
  },
  {
    "url": "topic/javascript/puzzlers.html",
    "revision": "e0618f26e69664b3f6df60470451b3f5"
  },
  {
    "url": "topic/leetcode/index.html",
    "revision": "9977a7f72fe72fc2ebe94f1712886a09"
  },
  {
    "url": "topic/linux/index.html",
    "revision": "2305785e015b4235e2bdf8b02dc1eb45"
  },
  {
    "url": "topic/markdown/index.html",
    "revision": "91b15a778ce1e44d3cf5eabb9574b58c"
  },
  {
    "url": "topic/miniapp/aliapp.html",
    "revision": "d5338b955187ee9cf7755b0c7dc454cf"
  },
  {
    "url": "topic/miniapp/index.html",
    "revision": "359303a59929ddb912053a4fd97c6c9a"
  },
  {
    "url": "topic/miniapp/wxapp.html",
    "revision": "7d8837ccdc827c2daa405bc7497a04d0"
  },
  {
    "url": "topic/nodejs/action.html",
    "revision": "d83aebe685469df9b2074c4b2ac752a1"
  },
  {
    "url": "topic/nodejs/api.html",
    "revision": "a98f253e34120d5b99af1a988d9cf855"
  },
  {
    "url": "topic/nodejs/index.html",
    "revision": "4f6e8fc5044021c755bef20f09c4546f"
  },
  {
    "url": "topic/performance/index.html",
    "revision": "b6cd96f8bf6f480ab3b2c272a6e139d4"
  },
  {
    "url": "topic/performance/network.html",
    "revision": "2b92ea1eea406eb3a802eb35a74dc313"
  },
  {
    "url": "topic/performance/performance.html",
    "revision": "afeab740726e10070fa9d05191ba7fb3"
  },
  {
    "url": "topic/rule/index.html",
    "revision": "3dc00ffee514e7b99d4d0dbaf8a359fb"
  },
  {
    "url": "topic/rxjs/index.html",
    "revision": "567cb9e16d9d824b121a97070df6d4d2"
  },
  {
    "url": "topic/test/index.html",
    "revision": "9252d8c52b09557275cb2484298779f1"
  },
  {
    "url": "topic/vim/index.html",
    "revision": "b4ba1215760852340651ceb2f4f79072"
  },
  {
    "url": "topic/vue/index.html",
    "revision": "3b649c2c8b0f5974c98da62521374a30"
  },
  {
    "url": "weekly.html",
    "revision": "aa441f4b77407f9b9374ae6b132fed6f"
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
