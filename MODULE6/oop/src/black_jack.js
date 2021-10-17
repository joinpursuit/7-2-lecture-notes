class Card {
	constructor(face, value, suit) {
	  this.face = face;
	  this.value = value;
	  this.suit = suit;
	}
}

class DeckOfCards {
	static buildNewPlayingCardsDeck() {
		const cards = [];
		const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
		for (let j = 0; j < suits.length; j++) {
			for (let i = 1; i <= 13; i++) {
				if (i === 1) {
					cards.push(new Card("Ace", 11, suits[j]));
				} else if (i === 11) {
					cards.push(new Card("Jack", 10, suits[j]));
				} else if (i === 12) {
					cards.push(new Card("Queen", 10, suits[j]));
				} else if (i === 13) {
					cards.push(new Card("King", 10, suits[j]));
				} else {
					cards.push(new Card(i, i, suits[j]));
				}
			}
		}

		return new DeckOfCards(cards);
	}

	constructor(cards = []) {
		this.cards = cards;
		this.shuffle(this.cards);
	}

	shuffle(array) {
		let m = array.length;
		let i = 0;
		// While there remain elements to shuffle…
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			[array[m], array[i]] = [array[i], array[m]];
		}
		return array;
	}
}
  
const deck = DeckOfCards.buildNewPlayingCardsDeck();
console.log(deck);