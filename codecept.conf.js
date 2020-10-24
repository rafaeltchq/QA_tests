const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'commerce_tests/**/*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'https://commerce.acromedia.com/',
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
  bootstrap: null,
  mocha: {},
  name: 'test-project',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}