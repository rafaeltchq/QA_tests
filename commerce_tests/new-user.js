Feature('Signup');

Before(async ({ I, ActionPage }) => {
    ActionPage.goToPage('/user/register')
});

Scenario('Creating a new user', async ({ I, ActionPage }) => {
    I.say('And I have empty form fields');
    I.say('And I fill form fields');
    ActionPage.goFillField('Email address', 'rafaelchq@live.de');
    ActionPage.goFillField('Username', 'rafaelchq');
    I.say(`And I check and uncheck 'Contact form'`);
    ActionPage.goToCheck('#edit-contact--2');
    ActionPage.goToUncheck('#edit-contact--2');
    ActionPage.goToDropdown('#edit-timezone--2', 'Madrid');
    I.say(`And I click 'create new user'`);
    I.say('Then I receive an email for verifing user');
});
