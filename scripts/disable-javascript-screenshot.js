import path from 'path';

function sleep(ms = 1000) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	})
}

const screenshotOutputFolder = path.join(process.cwd(), 'results', 'disable-javascript-screenshot', 'images');

async function takeScreenshot(page, filename) {
	const fullPathToScreenshot = path.join(screenshotOutputFolder, filename)

	await page.screenshot({
	  path: fullPathToScreenshot,
	  fullPage: false
	});
}

function sanitiseURL(string) {
	return string.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

async function disableJavaScriptScreenshot({page, url}) {
	await page.setJavaScriptEnabled(false);
	await page.goto(url, { // eslint-disable-line no-await-in-loop
		waitUntil: ['load', 'domcontentloaded', 'networkidle0']
	});

	const filename = `${sanitiseURL(url)}.png`;
	await takeScreenshot(page, filename)
	
	console.log(`![${url}](images/${filename})`);
	
    console.log('\n---\n');
}

export default disableJavaScriptScreenshot;
