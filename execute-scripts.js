import handleEachWebsite from './handle-each-website.js';
// Import getLinkedImages from './scripts/get-linked-images.js';
import getAnchors from './scripts/get-anchors.js';

async function main() {
	handleEachWebsite({
		mode: 'serve',
		async pageHandler(page) {
			const scripts = [getAnchors];
			const results = [];

			for (const script of scripts) {
				results.push(await script(page)); // eslint-disable-line no-await-in-loop
			}

			return results;
		}
	});
}

main();
