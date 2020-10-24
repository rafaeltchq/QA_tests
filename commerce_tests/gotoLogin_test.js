Feature('gotoLogin');

// Before(async ({ I, ActionPage }) => {
//     ActionPage.goToPage('/')
// });

Scenario('Going to Login page from Home', async ({ I, ActionPage }) => {
    I.say('Given I have a home page');
    ActionPage.goToPage('/')
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
});

Scenario('Going to Login page from Cart', async ({ I, ActionPage }) => {
    I.say('Given I have a Cart page');
    ActionPage.goToPage('/cart')
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
});

Scenario('Going to Login page from Live chat', async ({ I, ActionPage }) => {
    I.say('Given I have a Cart page');
    ActionPage.goToPage('/live-chat')
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
});

Scenario('Going to Login page from Products', async ({ I, ActionPage }) => {
    I.say('Given I have a Cart page');
    ActionPage.goToPage('/products')
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
});