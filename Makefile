DISTRO_ID=E2E66PL7XF5WSU

dev:
	npm run dev

build:
	npm run build 

preview: build 
	npm run preview

upload:
	aws s3 cp ./public/build/ s3://builder.okrstudio.com/build/ --recursive
	aws s3 cp ./public/img/ s3://builder.okrstudio.com/img/ --recursive
	aws s3 cp ./public/index.html s3://builder.okrstudio.com/index.html 

invalidate:
	aws cloudfront create-invalidation --distribution-id $(DISTRO_ID) --paths "/*"

deploy: build upload invalidate
