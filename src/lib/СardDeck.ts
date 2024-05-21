import Card from './Card.ts';

class CardDeck {
    private cards: Card[];

    constructor() {
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    public getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.cards.length > 0) {
                cards.push(this.getCard());
            } else {
                console.error('колода пуста');
                break;
            }
        }
        return cards;
    }
}

export default CardDeck;