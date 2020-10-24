const {I , ActionPage } = inject();

Given(/I have (\d+) page/, (site) => {
    ActionPage.goto(site)
})
When("I click Log In word", () => {
    ActionPage.goToLogin()
})
Then("I have Log In page")