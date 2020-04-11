# The default target must be at the top
.DEFAULT_GOAL := launch-chrome

install:
	npm install

update-deps:
	ncu -u

launch-chrome:
	node node_modules/archivist1/index.js

download-websites:
	node download-websites.js

execute-scripts:
	node execute-scripts.js