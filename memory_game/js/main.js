var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: src = 'images/queen-of-hearts.png'
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: src = 'images/queen-of-diamonds.png'
},
{
	rank: "king",
	suit: "hearts",
	cardImage: src = 'images/king-of-hearts.png'
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: 'images/king-of-diamonds.png'
}
];


var cardsInPlay = [];

/*var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped "+ cardOne);

var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped "+ cardTwo); */


var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};

var flipCard = function(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped "+ cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();
};

flipCard(0);
flipCard(2);
