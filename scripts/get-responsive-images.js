import * as html from 'html';

const prettyPrint = html.default.prettyPrint;

function script() {
	const images = [...document.querySelectorAll('img[srcset]')] // eslint-disable-line no-undef
		.filter(element => !element.getAttribute('src'));

	const pictures = [...document.querySelectorAll('picture')] // eslint-disable-line no-undef
		.filter(element => {
			return !element.querySelector('img') || !element.querySelector('img').getAttribute('src');
		});

	const els = [...images, ...pictures]
		.map(element => element.outerHTML);

	return els;
}

async function getResponsiveImages(page) {
	const scriptToEvaluate = `(${script.toString()})()`;
	const results = await page.evaluate(scriptToEvaluate);

	if (results.length > 0) {
		console.log('```html');
		for (const element of results) {
			console.log(prettyPrint(element), '\n');
		}

		console.log('```');
	}

	console.log('\n---\n');
}

export default getResponsiveImages;
