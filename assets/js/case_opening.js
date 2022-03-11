var cardList = $('.cardList').first(),
    cards = $('.casecard'),
    speed = 1000,
    width = 100,
    randomize = true,
    distance = 20 * width;

for (var i = 0; i < 50; i++) {
    cards.clone().appendTo(cardList);
}

function spin() {
    var newMargin = 0,
        newDistance = distance;
    if (randomize) {
        newDistance = Math.floor(Math.random() * cards.length * 5);
        newDistance += cards.length * 10;
        var rand = Math.floor((Math.random() * 100) + 1);
        newDistance *= rand;
    }
    newMargin = -(newDistance);
    cards.first().animate({
        marginLeft: newMargin
    }, 7500);
}

$('#spin').click(function (e) {
    // cards.first().css('margin-left', 0);
    e.currentTarget.disabled = "true";
    setTimeout(spin, 500);
    return false;
});