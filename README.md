# Github API interaction in [Angular 5](https://angular.io)

To be used for educational and demonstrational purposes. 
Represents an example of interaction with RESTful API, particularly with [Github API v3](https://developer.github.com/v3/issues/). 

Application renders a list of current issues for [Angular.js Github repo](https://github.com/angular/angular.js/issues) with the following features:

* Demonstrates usage of some [Angular](https://angular.io) features like routing and services.
* Uses SASS/SCSS syntax by default (written in compliance with [BEM methodology](https://en.bem.info/methodology/)). 
* Contains custom html/css layout, which works decently on mobile (phone, tablet) as well as desktop browsers.
* Includes method for parsing the "Link" header, used to implement simple pagination controls for the list. 
* Implements the issue details page with comments (renders markdown and syntax highlighting, thanks to [ngx-md](https://github.com/dimpu/ngx-md)).
* Includes working sample karma/jasmine tests for all components.
* Has thoroughly commented code.
* Written in Typescript.

It still has a lot you can try yourself:
* Looks like I've missed the issue status indicator!
* Pagination beggs to be taken to the next level with page numbers and "go to page" functionality.
* Implement filtering and sorting.
* Any other fun features you can think of.
So get creative, go for it :)!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli), uses Angular version 5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` or use the `-o` flag to instantly open in browser. 
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Only a few basic tests included (but they actually work :).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
A single basic test (but it actually works too :).