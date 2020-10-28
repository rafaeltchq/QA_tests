Feature('gotoLogin');
// const datos = require('database')
// Before(async ({ I, ActionPage }) => {
//     ActionPage.goToPage('/')
// });

let pages = new DataTable(['site', 'address']);
pages.add(['Home','/' ]);
pages.add(['Cart','/cart']);
pages.add(['Live-chat','/live-chat']);
pages.add(['products','/products']);



Data(pages).Scenario('Going to Login page', async ({ I, ActionPage, current }) => {
// Scenario('Going to Login page', async ({ I, ActionPage }) => {
    I.say("Given I have a Home page");
    ActionPage.goToPage(current.address)
    I.say('When I click Log In word');
    ActionPage.goToLogin();
    I.say('Then I have Log In page');
    I.see('Log in')
});