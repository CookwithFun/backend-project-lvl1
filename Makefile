start:
	node bin/brain-games.js

install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint src/index.js