exports.config = {
  output: './output',
  helpers: {
    Protractor: {
      url: 'http://localhost/',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      smartWait: 5000,
      windowSize: 'maximize',
      angular: false
    }
  },
  include: {
    ActionPage: './commerce_tests/pages/action.page.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  // gherkin: {
  //   features: './commerce_tests/features/*.feature',
  //   steps: ['./commerce_tests/step_definitions/gotoLogin_steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: 'commerce_tests/*_test.js',
  name: 'test-project'
}