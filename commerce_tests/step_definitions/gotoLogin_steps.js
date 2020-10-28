const { I, ActionPage } = inject();

Given('I have {word} page with address {string}', (string, word) => {
    ActionPage.goToPage(word)
});

When('I click Log In word', () => {
  ActionPage.goToLogin()
});

Then('I have Login page', () => {
  I.see('Log in')
});

