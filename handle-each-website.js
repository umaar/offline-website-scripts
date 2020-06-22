import puppeteer from 'puppeteer';
import getWebsites from './list-of-websites.js';
import changeArchivistMode from './change-archivist-mode.js';
import config from './config.js';

async function start({mode = 'serve', pageHandler}) {
	let currentIndex = 0;
	const browser = await puppeteer.connect({
		browserURL: config.remoteBrowserURL
	});

	const page = await browser.newPage();
	await page.setCacheEnabled(false);
	await page.setViewport({width: 1600, height: 800});

	await changeArchivistMode(mode);

	const allWebsites = await getWebsites();
	const results = [];
	for (const url of allWebsites) {
		currentIndex++;

		console.log(`\n#### [${(new URL(url)).hostname}](${url}) (${currentIndex}/${allWebsites.length})\n`);

		// console.log(`\n#### Navigating to: ${url} (${currentIndex}/${allWebsites.length})`);
		let pageResponse;

		try {
			pageResponse = await page.goto(url, { // eslint-disable-line no-await-in-loop
				waitUntil: 'networkidle2'
			});
		} catch (error) {
			console.log(`\tError navigating to: ${url}`, error.message);
			continue;
		}

		// If archivist doesn't have the page in its cache
		// it returns with a text/plain content type

		if (pageResponse && pageResponse.headers) {
			const responseHeaders = pageResponse.headers();
			const contentType = responseHeaders['content-type'];
			if (contentType === 'text/plain') {
				console.log(`\tNot in cache: ${url}`);
				continue;
			}
		} else {
			console.log('\tUnexpected page response. Skipping.');
			continue;
		}

		await pageHandler({page, url}); // eslint-disable-line no-await-in-loop
	}

	await page.close();
	browser.disconnect();
}

export default start;
