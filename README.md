# next-hnpwa-guide-kit

> Guide Kit for Next.js HNPWA (Hacker News PWA). It looks like to provide less codes in the limitted feature, which are not enough for production. But it is essential to help you understand how it works HNPWA with the target framework. Backed by [firebase-hackernews](https://www.npmjs.com/package/firebase-hackernews) 3rd-party lib for [Hacker News firebase API](https://github.com/HackerNews/API), which is [running on service worker](https://github.com/codebusking/next-hnpwa-guide-kit/blob/master/generate-sw.js#L71) with brand new service worker SDK from Google, called [Workbox](https://workboxjs.org)

<p align="center">
<img src="https://user-images.githubusercontent.com/124117/27153738-93aab18e-518d-11e7-92d9-d4c70e05ca4e.png" width="1024" />
</p>

## Getting Started

Watch the [demo](https://next-hnpwa.now.sh/)

```sh
# Run this app in development mode
yarn dev

# Starts the application in production mode with express
yarn start

# Starts the application in production mode with next
yarn start:next

# Builds the app for production to the .next folder.
yarn build

# Builds the app for analyzing
yarn build:report
```

# License

MIT @ CodeBusking
