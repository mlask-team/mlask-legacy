# Mlask

Mlask App will help you in conscious meal planning and assist you in maintaining healthy day-to-day habits.

## Development server

Run `npm run serve:client` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `npm run serve:api` for a api server. Api runs on http://localhost:3333/ but it's proxied on http://localhost:4200/api to avoid CORS issues.

Run `npm run start:all` to run both client and api.

## Build

Run `ng build mlask-client` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm run test:client` and `npm run test:api` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `npm run e2e:client` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Development using Nx

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` or `ng g @nrwl/workspace:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@mlsk/mylib`.

### Code scaffolding

Run `ng g c my-component --project=mlask-client` to generate a new component.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Useful links

[Angular Checklist](https://angular-checklist.io/)
[Component Driven Design](https://www.componentdriven.org/)
[Storybook](https://storybook.js.org/docs/angular)
[Nx Documentation](https://nx.dev/angular)