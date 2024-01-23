.ONESHELL: clean build

clean:
	# Remove the package folder if it exists
	rm -rf package
	rm -rf dist

build: clean
	# Run npm run babel
	npm run babel:compile

	# Create the package folder
	mkdir -p package

	# Copy package.json to the package folder
	cp package.json package/

	# Move files from dist folder to package folder
	find dist -type f ! -name "*.map" ! -name "*.test.js" ! -name "*.test.jsx" -exec cp {} package/ \;

	# Rename index.js to index.jsx in the package folder
	rm -rf  package/index.js
	cp dist/index.js package/index.jsx
