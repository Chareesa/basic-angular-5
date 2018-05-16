# Basic Angular Project

## Setup Instructions

### First, Build foundation
1. `ng new projectName` --style=scss --routing
2. cd into the project and `ng serve`
3. Open browser to localhost:4200. The app will automatically reload if you change any of the source files.

### Second, Build pieces
1. (I suggest opening a new command prompt) Navigate to project.
2. `ng generate component componentName` You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
3. `ng generate service serviceName` Short hand for this: `ng g s serviceName`

## Add Animations
1. `npm install @angular/animations@latest --save`
2. Add import to app.module.ts: import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
3. Add to @NgModule imports list.
4. Add import to component. Example: import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

## Add Routing
1. Import components you want to set up routing for, in the file app-routing.module.ts. Example: import { HomeComponent } from './home/home.component';
2. In the same file, set up paths by inserting an object into routes with properties path and component. Home path doesn't need a value in path. Example object: {path: '', component: HomeComponent}
3. In an html file, you can use that path like this: `<a routerLink="">Home</a>`

## Build and Deploy

1. Run `ng build --prod` to build the project. --prod flag (production build) runs optimazations to make the app smaller and faster. Building creates a dist folder with build artifacts. 
2. (option 1) Grab all files in dist folder, excluding .txt and .ico, and upload to a server. If uploading to a sub folder such as url.com/: `ng build --prod --base-href="myUrl"`
2. (option 2) Deploy to GitHub Pages. Use cli tool: Run `npm install -g angular-cli-ghpages`. Installs on computer.
3. Create GitHub Repo and push code up.
4. Run `ng build --prod --base-href="https://userName.github.io/repoName/"`
5. Run `angular-cli-ghpages`
6. Go to https://userName.github.io/repoName/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
