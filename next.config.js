const withWorkbox = require('next-workbox')
const withManifest = require('next-manifest')
const buildID = require(`${__dirname}/build-id.json`);

const defaults = {
  output: './static/',
  name: 'PWA',
  icons: [
    {
      "src": "/static/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

module.exports = withWorkbox(
	withManifest({
		manifest: {
			...defaults
		},
		generateBuildId: async () => {
			return buildID.id;
		}
	})
);
