#!/usr/bin/env node

const fs = require('fs');
const {join} = require('path');
const nextBuildId = require('next-build-id');

(async () => {
	const nowJSON = JSON.parse(fs.readFileSync(join(__dirname, 'now.json')));
	const buildID = await nextBuildId({ dir: __dirname });
	const route = { src: '/sw.js', dest: `_next/static/${buildID.id}/pages/sw.js` };

	if (!nowJSON.routes) {
		nowJSON.routes = [];
	}

	const index = nowJSON.routes.findIndex(r => r.src === '/sw.js');

	if (index > -1) {
		nowJSON.routes[index] = route;
	} else {
		nowJSON.routes.push(route);
	}

	fs.writeFileSync(join(__dirname, 'now.json'), JSON.stringify(nowJSON, '', '\t'));
	fs.writeFileSync( join(__dirname, 'build-id.json'), JSON.stringify(buildID, '', '\t'));
})()



