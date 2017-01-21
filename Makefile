.PHONY: build

dev:
	@if [ !"$$port" ]; then \
		port=8080; \
	fi; \
	npm run dev $$port;

build:
	@npm i
	@npm run build

