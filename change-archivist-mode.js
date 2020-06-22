import fetch from 'node-fetch';
import config from './config.js';

const archivistURL = config.archivistModeURL;

async function matchesMode(mode) {
	const rawResponse = await fetch(archivistURL);
	const currentMode = await rawResponse.text();
	return currentMode === mode;
}

async function changeArchivistMode(mode) {
	if (await matchesMode(mode)) {
		return;
	}

	await fetch(archivistURL, {
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		body: `mode=${mode}`,
		method: 'POST'
	});

	if (await matchesMode(mode)) {
		console.log(`Mode changed to ${mode} successfully`);
	} else {
		throw new Error('Failed to change archivist mode');
	}
}

export default changeArchivistMode;
