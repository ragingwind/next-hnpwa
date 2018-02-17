importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.10.0/firebase-database.js')
importScripts('https://unpkg.com/firebase-hackernews@2.11.0/dist/firebase-hackernews-sw.js')

hackernews.init(firebase, {
	watch: true
})