ng3:
	docker-compose -f docker-compose.dev.yml up --build
ng4:
	docker-compose -f docker-compose.dev.yml down	
ng5: 
	docker system prune -a # delete all docker images in your computer

start: ng3

stop: ng4

doc:
	cd share/docs/src/ && node cmd.js

install: ng1
ng1:
	nvm install 14
	nvm use 14
	npm install -g npm@latest
	npm install -g @angular/cli
	ng new front_angular
ng2: 
	cd front_angular && ng serve
ng6:
	mkdir api_express
	cd api_express && npm init -y
	cd api_express && npm install nodemon --save-dev
	cd api_express && npm install bcryptjs body-parser cors express jsonwebtoken mongoose validator --save	
ng8:
	#cd front_angular && ng generate module app-routing --flat --module=app
	cd front_angular && ng generate component home
	cd front_angular && ng generate component header
	cd front_angular && ng generate component profile
	cd front_angular && ng generate component auth
	cd front_angular && ng generate module auth
	cd front_angular && ng generate service auth/auth
	cd front_angular && ng generate guard auth/auth
	cd front_angular && ng generate component auth/register
	cd front_angular && ng generate component auth/login
	cd front_angular && npm install bootstrap --save
	cd front_angular && npm install @auth0/angular-jwt --save
	cd front_angular && npm install moment --save

ng9:
	#cd front_angular && npm install angular-in-memory-web-api --save
	#cd front_angular && ng generate service InMemoryData
	#cd front_angular && ng generate component dish-search

test_ts_ok:
	curl http://localhost:6016/api_ts/hello?greeting=max
test_ts_error:
	curl http://localhost:6016/api_ts/hello
test_api:
	curl http://localhost:6016/api_ts/api-docs
test_angular:
	curl http://localhost:4216/
