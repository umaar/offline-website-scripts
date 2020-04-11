import handleEachWebsite from './handle-each-website.js';

async function main() {
    handleEachWebsite({
        mode: 'save'
    });
}

main();