const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
// const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
// require("chromedriver");

// driver setup
// const capabilities = Capabilities.chrome();
// capabilities.set('chromeOptions', { "w3c": false });
// const driver = new Builder().withCapabilities(capabilities).build();
function currentPage(page) {

}

Given('I have {string} page', function (site) {
    currentPage(site)
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
  });

  When('I click Log In word', function () {
      
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
  });

  Then('I have Log In page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
