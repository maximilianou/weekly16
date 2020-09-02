const { append, remove } = require('./readmes.js');

console.log('createing README.md');

const fileOut = '../../../README.md';
const filesIn = [
  { path: '../../../DO.md', mark: '\n' },
  { path: '../../../Makefile', mark: '\n```\n' },
  { path: '../../../docker-compose.dev.yml', mark: '\n```\n' },
  { path: '../../../front_angular/Dockerfile.dev', mark: '\n```\n' },
  { path: '../../../api_express/Dockerfile.dev', mark: '\n```\n' },
  {
    path: '../../../front_angular/package.json',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/package.json',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/app.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/app-routing.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/app.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/app.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/server.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/config/environment.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/controllers/UserController.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/models/User.js',
    mark: '\n```\n',
  },
  {
    path: '../../../api_express/routes/UserRoute.js',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/home/home.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/home/home.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/home/home.component.css',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/header/header.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/header/header.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/profile/profile.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/auth.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/auth.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/auth.service.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/auth.guard.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/register/register.component.ts',
    mark: '\n```\n',
  },
  {
    path:
      '../../../front_angular/src/app/auth/register/register.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/login/login.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../front_angular/src/app/auth/login/login.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/server.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/environment.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/config/app.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/routes/routes_test.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/assets/hello.yaml',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/lib/routes/helloRoutes.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../api_ts/package.json',
    mark: '\n```\n',
  },
];
const publish = (cmd) => {
  remove({ fileOut: cmd.fileOut });
  console.log('removed.');
  cmd.filesIn.forEach((file) => {
    console.log('each file.');
    append({ fileIn: file.path, fileOut, mark: file.mark });
  });
};

publish({ fileOut, filesIn });

console.log('created README.md');
