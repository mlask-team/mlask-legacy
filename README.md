# Mlask

Mlask App will help you in conscious meal planning and assist you in maintaining healthy day-to-day habits.

## Project structure

Apps

- *mlask-api* - restful backend for Mlask App. Powered by NestJs.
- *mlask-client* - frontend for Mlask App. Powered by Angular.

Libs

- *theme* - shared assets and scss files.
- *ui* - shared module containing all basic UI components. Components are documented with Storybook.
- *{feature}/api* - all backend logic related to domain of this feature.
- *{feature}/models* - interfaces for API's DTOs of the feature.
- *{feature}/state* - set of NGRX feature modules encapsulating all business logic and state management. All implementation details are hidden behind facades.
- *{feature}/feature* - set of Angular components of the feature.

As you can see, this project has a set of libraries for every of its feature. This helps to keep all code related to one domain in one folder and follow the best DDD practices.

## Development server

Run `npm run serve:client` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `npm run serve:api` for a api server. Api runs on http://localhost:3333/ but it's proxied on http://localhost:4200/api to avoid CORS issues.

Run `npm run start:all` to run both client and api.

## Running tasks

We recommend [Nx Console](https://nx.dev/latest/angular/cli/console) plugin to run tasks related to each app and lib.

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
