/* global document */

function script() {
	const failingLinkedImages = [...document.querySelectorAll('a')]
		.filter(a => a.querySelector('img[alt=""],img:not([alt])'))
		.filter(element => !element.textContent)
		.map(element => element.outerHTML)
		.length;

	return `Linked Images: ${failingLinkedImages}`;
}

async function getLinkedImages(page) {
	const url = await page.url();
	const scriptToEvaluate = `(${script.toString()})()`;
	const result = await page.evaluate(scriptToEvaluate);

	console.log(`${url}: ${result}`);

	return 'this is some random result!!!!!';
}

export default getLinkedImages;
