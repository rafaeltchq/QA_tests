const I = actor();

const goToAnchorTag = innerText => locate('a').withText(innerText);
module.exports = {
    goto(place) {
        I.see(place);
        I.click(goToAnchorTag(place));
    }
}
