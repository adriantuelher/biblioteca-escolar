// jest.config.js
module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/services/**/*.js',
    'src/entities/**/*.js',
    '!src/services/ConsoleNotificationService.js'
  ],
  coverageDirectory: 'coverage',
};
