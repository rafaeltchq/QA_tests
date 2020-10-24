Feature('Signup');

Before(async ({ I, ActionPage }) => {
    ActionPage.goToPage('/')
});

Scenario('Going to Login section', async ({ I, ActionPage }) => {
    I.say('Given I have a home page');
    I.say('When I click to Log In link');
    ActionPage.goToLogin();
    I.say('And I have a Log In page');
// });
// Scenario('Going to Signup section', async ({ I, ActionPage }) => {
    // I.say('Given I have a Log In page');
    I.say(`And I click a 'create a new user' tab`);
    ActionPage.goToPlace('Create new account');
    I.say(`And I have a 'create a new user' section`);
// });
// Scenario('Filling Signup form', async ({ I, ActionPage }) => {
    I.say('And I have empty form fields');
    I.say('And I fill form fields');
    ActionPage.goFillField('Email address', 'rafaelchq@live.de');
    ActionPage.goFillField('Username', 'rafaelchq');
    ActionPage.scrollToAndClick('#edit-timezone--2');
    ActionPage.goToDropdown('Time zone', 'Madrid');
    I.say(`And I click 'create new user'`);
    I.say('Then I receive an email for verifing user');

    // I.wait(5);
});
