unittest:
	sh ./scripts/unit_test.sh

build-web:
	cd web && npm install && npm run build