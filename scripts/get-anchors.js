/* global document */

function script() {
	const selector = 'a[href="#"],a:not([href]),a[href^="javascript:"],a[href^="file:"]';
	const failingLinks = [...document.querySelectorAll(selector)]
		.map(element => element.outerHTML);

	return failingLinks;
}

async function getAnchors(page) {
	const url = await page.url();
	const scriptToEvaluate = `(${script.toString()})()`;
	const result = await page.evaluate(scriptToEvaluate);

	console.log(`${url}: ${result.length}`);
}

export default getAnchors;
