import path from 'path';

const screenshotOutputFolder = path.join(process.cwd(), 'results', 'disable-javascript-screenshot', 'images');

async function takeScreenshot(page, filename) {
	const fullPathToScreenshot = path.join(screenshotOutputFolder, filename);

	await page.screenshot({
		path: fullPathToScreenshot,
		fullPage: false
	});
}

function sanitiseURL(string) {
	return string.replace(/[^a-z\d]/gi, '_').toLowerCase();
}

async function disableJavaScriptScreenshot({page, url}) {
	await page.setJavaScriptEnabled(false);
	await page.goto(url, {
		waitUntil: ['load', 'domcontentloaded', 'networkidle0']
	});

	const filename = `${sanitiseURL(url)}.png`;
	await takeScreenshot(page, filename);

	console.log(`![${url}](images/${filename})`);

	console.log('\n---\n');
}

export default disableJavaScriptScreenshot;
