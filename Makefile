SRV_DIR = /srv/http/public

all: $(SRV_DIR)

node_modules:
	npm install

dist: node_modules
	npm run build

$(SRV_DIR): dist
	rm -rf $(SRV_DIR)

	mkdir -p $(SRV_DIR)
	cp -r dist/* $(SRV_DIR)
	cp -r dist/.htaccess $(SRV_DIR)
	echo "http://localhost/wip"
