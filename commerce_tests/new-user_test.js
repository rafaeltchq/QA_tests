Feature('Signup');

Scenario('Creating a new user', async ({ I, ActionPage }) => {
    I.amOnPage('/');
    I.see('Log In');
    I.click({ xpath: `(//nav[@id='block-useraccountmenu']//a[.='Log in'])`});
    // ActionPage.goto('Log In')
    ActionPage.goto('Create new account')

    I.fillField('Email address', 'rafaelchq@live.de');
    I.seeInField('#edit-mail', 'rafaelchq@live.de');

    I.fillField('Username', 'rafaelchq');
    I.seeInField('#edit-name', 'rafaelchq');

    I.scrollTo('#edit-timezone--2');
    I.click('#edit-timezone--2');
    I.see('Madrid');
    I.selectOption('#edit-timezone--2','Madrid');
    // I.wait(2);
    // I.scrollPageToBottom();
    // I.wait(2);
    // I.scrollPageToTop();
    // I.wait(2);
});
