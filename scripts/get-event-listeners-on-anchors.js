async function getDocumentNodeID(client) {
    const {root} = await client.send('DOM.getDocument');
    return root.nodeId;
}

async function executeEventListenersCommand(client, objectID) {
    const {listeners} = await client.send('DOMDebugger.getEventListeners', {
        objectId: objectID
    });

    return listeners.filter(({type}) => type === 'click').length;
}

async function getEventListenersOnHTML(client) {
    const {result} = await client.send('Runtime.evaluate', {
        expression: `document.querySelector('html')`
    });

    return executeEventListenersCommand(client, result.objectId)
}

async function getEventListenersOnDocument(client) {
    const {result} = await client.send('Runtime.evaluate', {
        expression: `document`
    });

    return executeEventListenersCommand(client, result.objectId)
}

async function getEventListenersOnBody(client) {
    const {result} = await client.send('Runtime.evaluate', {
        expression: `document.body`
    });

    return executeEventListenersCommand(client, result.objectId)
}

async function getEventListenersByNode(client, nodeID) {
    const {object} = await client.send('DOM.resolveNode', {
        nodeId: nodeID
    })

    return executeEventListenersCommand(client, object.objectId)
}

async function getOuterHTML(client, nodeID) {
    const {outerHTML} = await client.send('DOM.getOuterHTML', {
        nodeId: nodeID
    });

    return outerHTML;
}

async function getNodeIDsForSelector(client, selector) {
    const documentNodeID = await getDocumentNodeID(client);
	const {nodeIds} = await client.send('DOM.querySelectorAll', {
        selector,
        nodeId: documentNodeID
    });

    return nodeIds;
}

async function getAnchors(page) {
	const client = await page.target().createCDPSession();

    const selector = `a:not([href]),a[href^="javascript:void(0)"],a[href=""]`;
    const nodeIDs = await getNodeIDsForSelector(client, selector)
    console.log('Anchors elements needing attention: ', nodeIDs.length);

    const eventListenersOnDocumentCount = (await getEventListenersOnDocument(client))
    const eventListenersOnBodyCount = (await getEventListenersOnBody(client))
    const getEventListenersOnHTMLCount = (await getEventListenersOnHTML(client))

    console.log(`HTML Event Listeners: ${getEventListenersOnHTMLCount}`);
    console.log(`Document Event Listeners: ${eventListenersOnDocumentCount}`);
    console.log(`Body Event Listeners: ${eventListenersOnBodyCount}`);

    for (const nodeID of nodeIDs) {
        const html = await getOuterHTML(client, nodeID)
        const eventListenersOnAnchorCount = (await getEventListenersByNode(client, nodeID));

        console.log('\n```html');
        console.log(html);
        console.log('```\n');

        console.log(`Event listeners on this element: ${eventListenersOnAnchorCount}\n`);
    }
}

export default getAnchors;
