const I = actor();

const goToAnchorTag = innerText => locate('a').withText(innerText);
const goToFieldName = fieldName => locate('label').withText(fieldName);
module.exports = {
    goToPage() {
        I.amOnPage('https://commerce.acromedia.com/')
        I.refreshPage()
        I.executeScript(() => sessionStorage.clear())
        I.executeScript(() => console.error('Error!'))
        I.waitForVisible('.site-header__logo')
    },
    goToPlace(place) {
        I.waitForClickable(goToAnchorTag(place),3);
        I.click(goToAnchorTag(place));
    },
    goToLogin() {
        I.waitForClickable('.menu__item--log-in',3);
        I.click({ xpath: `(//nav[@id='block-useraccountmenu']//a[.='Log in'])`});
    },
    goFillField(field, text) {
        I.scrollTo(goToFieldName(field))
        I.fillField(field, text);
        I.seeInField(field, text);
    },
    scrollToAndClick(item) {
        I.scrollTo(item);
        I.click(item);
    },
    goToDropdown(dropdown, item) {
        I.click(dropdown);
        I.selectOption(goToFieldName(dropdown),item);
        I.waitForVisible(item);
    }
}
