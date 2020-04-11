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

    await changeArchivistMode(mode);

    const allWebsites = await getWebsites();

    for (const url of allWebsites) {
        currentIndex++;
        console.log(`\nNavigating to: ${url} (${currentIndex}/${allWebsites.length})`);
        let pageResponse;

        const startTime = Date.now()

        try {
            pageResponse = await page.goto(url, {
                waitUntil: 'networkidle2'
            });
        } catch (error) {
            console.log(`\tError navigating to: ${url}`, error.message);
            continue;
        }

        const endTime = Date.now()

        console.log(`\t${endTime - startTime}ms`);
        
        // if archivist doesn't have the page in its cache
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
        
         
        if (pageHandler) {
            await pageHandler(page);
        }
    }

    await page.close();
    browser.disconnect();
}

export default start;