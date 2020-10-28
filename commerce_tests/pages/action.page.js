const I = actor();

const goToAnchorTag = innerText => locate(' > ul > li.menu__item > a').withText(innerText);
const goToFieldName = fieldName => locate('label').withText(fieldName);
module.exports = {
    goToPage(site) {
        I.amOnPage(`https://commerce.acromedia.com${site}`)
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
        I.see('Log In');
        I.click({ xpath: `(//nav[@id='block-useraccountmenu']//a[.='Log in'])`});
        I.waitForVisible('.page-title',2)
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
        I.selectOption(dropdown,item);
    },
    goToCheck(item) {
        I.checkOption(item);
    },
    goToUncheck(item) {
        I.seeCheckboxIsChecked(item);
        I.uncheckOption(item);
    }
}
