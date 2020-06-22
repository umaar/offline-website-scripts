import * as html from 'html';

const prettyPrint = html.default.prettyPrint;

function script() {
	const images = [...document.querySelectorAll('img[srcset]')]
		.filter(el => !el.getAttribute('src'))

	const pictures = [...document.querySelectorAll('picture')].filter(el => {
		return !el.querySelector('img') || !el.querySelector('img').getAttribute('src')
	})

	const els = [...images, ...pictures]
		.map(element => element.outerHTML);

	return els;
}

async function getResponsiveImages(page) {
	const url = await page.url();
	const scriptToEvaluate = `(${script.toString()})()`;
	const results = await page.evaluate(scriptToEvaluate);

    
	if (results.length) {
		console.log('```html');
		for (const el of results) {
			console.log(prettyPrint(el), '\n');		
		}
		console.log('```');
	}
    console.log('\n---\n');
}

export default getResponsiveImages;
