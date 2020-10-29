Feature('gotoLogin');
const sites = require('./dataset/site_data');

Data(sites).Scenario('Going to Login page', async ({ I, ActionPage, current }) => {
    I.say(`Given I have a ${current.site} page`);
    ActionPage.goToPage(current.url)
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
    I.see('Log in')
});


