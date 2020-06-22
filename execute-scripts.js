import handleEachWebsite from './handle-each-website.js';
// Import getLinkedImages from './scripts/get-linked-images.js';
// import getAnchors from './scripts/get-anchors.js';
// import getEventListenersOnAnchors from './scripts/get-event-listeners-on-anchors.js';
// import getResponsiveImages from './scripts/get-responsive-images.js';
import disableJavaScriptScreenshot from './scripts/disable-javascript-screenshot.js';

async function main() {
	handleEachWebsite({
		mode: 'serve',
		async pageHandler(args) {
			// const scripts = [getAnchors];
			// const scripts = [getEventListenersOnAnchors];
			// const scripts = [getResponsiveImages];
			const scripts = [disableJavaScriptScreenshot];

			for (const script of scripts) {
				await script(args);
			}
		}
	});
}

main();
