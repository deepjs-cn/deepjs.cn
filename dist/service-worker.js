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
    "revision": "906e300d7311db5b917bcf5a68c283b7"
  },
  {
    "url": "assets/css/3.styles.0b24920e.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.30bd8044.js",
    "revision": "79f58aa505edb029a7e4a10198011b49"
  },
  {
    "url": "assets/js/1.553dc460.js",
    "revision": "0270d7bf409f23535302251ef91cbc50"
  },
  {
    "url": "assets/js/2.1475898d.js",
    "revision": "e74285139146396ef00fd73fd99cdac8"
  },
  {
    "url": "assets/js/app.77bdcef9.js",
    "revision": "14943454272b17cf28d0dee779df83c2"
  },
  {
    "url": "data/index.html",
    "revision": "cf86f5037e1f9c757be08e35c663d28a"
  },
  {
    "url": "index.html",
    "revision": "5d6f6217d4daf602732ea13362f2aa16"
  },
  {
    "url": "vue.html",
    "revision": "825ccd92ff023bd3a396746653b52456"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
