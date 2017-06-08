import React from 'react'

// sw snippets from https://github.com/codebusking/vue-hn-pwa-guide-kit/tree/master/build
// all of comments was removed to convenience reason

const swDevRegistration = 
`self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url)
    }
  })
})`

const swProdRegistration = 
`(function() {
  'use strict'
  const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    )

  window.addEventListener('load', function() {
      if ('serviceWorker' in navigator &&
          (window.location.protocol === 'https:' || isLocalhost)) {
        navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          registration.onupdatefound = function() {
            if (navigator.serviceWorker.controller) {
              const installingWorker = registration.installing

              installingWorker.onstatechange = function() {
                switch (installingWorker.state) {
                  case 'installed':
                    break
                  case 'redundant':
                    throw new Error('The installing ' +
                                    'service worker became redundant.')
                  default:
                    // Ignore
                }
              }
            }
          }
        }).catch(function(e) {
          console.error('Error during service worker registration:', e)
        })
      }
  })
})()`

export default () => (
  <script dangerouslySetInnerHTML={{
    __html: process.env.NODE_ENV === 'production'
      ? swProdRegistration
      : swDevRegistration
  }} />
)