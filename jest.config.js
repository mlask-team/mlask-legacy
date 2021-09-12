const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/mlask-api',
    '<rootDir>/apps/mlask-client',
    '<rootDir>/libs/ui',
    '<rootDir>/libs/todo/state',
    '<rootDir>/libs/todo/api',
    '<rootDir>/libs/todo/feature',
    '<rootDir>/libs/utils/angular',
    '<rootDir>/libs/utils/nest',
    '<rootDir>/libs/shared/loader',
  ],
};
