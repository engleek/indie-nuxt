importScripts('/indie-nuxt/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/indie-nuxt/_nuxt/062e368a681faa1b62f0.js",
    "revision": "faf2a282251f5f3191b421a5d2192aa0"
  },
  {
    "url": "/indie-nuxt/_nuxt/5596a34d52b8135eba71.js",
    "revision": "3c91ee51fc3c02c038153418f524c5c3"
  },
  {
    "url": "/indie-nuxt/_nuxt/782074816f4eb827ab44.js",
    "revision": "2dbf1ba437a96e40a3484ff5e53fe013"
  },
  {
    "url": "/indie-nuxt/_nuxt/86067b7abd2b6929820b.js",
    "revision": "8692dcab2b036b40b8e15058aa744e27"
  },
  {
    "url": "/indie-nuxt/_nuxt/b4bc0372e4294dca3880.js",
    "revision": "2dfc865a231f56d431824c2b5c3f77ab"
  }
], {
  "cacheId": "indie-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/indie-nuxt/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/indie-nuxt/.*'), workbox.strategies.networkFirst({}), 'GET')
