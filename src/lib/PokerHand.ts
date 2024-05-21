// PokerHand.ts
import Card from './Card.ts';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        switch (true) {
            case this.Flush():
                return 'Флэш';
            case this.ThreeOfAKind():
                return 'Тройка';
            case this.TwoPairs():
                return 'Две пары';
            case this.OnePair():
                return 'Одна пара';
            default:
                return 'Старшая карта';
        }
    }

    private Flush(): boolean {
        return this.cards.every(card => card.suit === this.cards[0].suit);
    }

    private ThreeOfAKind(): boolean {
        const rankCombination: { [rank: string]: number } = {};
        this.cards.forEach(card => {
            rankCombination[card.rank] = (rankCombination[card.rank] || 0) + 1;
        });
        return Object.values(rankCombination).includes(3);
    }

    private TwoPairs(): boolean {
        const rankCombination: { [rank: string]: number } = {};
        this.cards.forEach(card => {
            rankCombination[card.rank] = (rankCombination[card.rank] || 0) + 1;
        });
        const pairs = Object.values(rankCombination).filter(count => count === 2);
        return pairs.length === 2;
    }

    private OnePair(): boolean {
        const rankCombination: { [rank: string]: number } = {};
        this.cards.forEach(card => {
            rankCombination[card.rank] = (rankCombination[card.rank] || 0) + 1;
        });
        return Object.values(rankCombination).includes(2);
    }
}

export default PokerHand;
