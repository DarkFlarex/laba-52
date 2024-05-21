import './App.css';
import MyCard from './components/card/card.tsx';
import Card from './lib/Card.ts';
import CardDeck from './lib/СardDeck.ts';
import { useState } from 'react';
import PokerHand from './lib/PokerHand';

const App: React.FC = () => {
    const [cardDeck] = useState<CardDeck>(() => new CardDeck());
    const [gameCard, setGameCard] = useState<Card[]>([]);
    const [pokerHand, setPokerHand] = useState<string>('');

    const dealCards = () => {
        if (cardDeck) {
            const newCards = cardDeck.getCards(5);
            setGameCard(newCards);
            const handCombination = new PokerHand(newCards);
            setPokerHand(handCombination.getOutcome());
        }
    };

    return (
        <div className="App">
            <button onClick={dealCards}>Раздать карты</button>
            {gameCard.length > 0 ? (
                <>
                    <p>Текущая рука: {pokerHand}</p>
                    <p>Карты есть</p>
                    <div className="playingCards faceImages">
                        {gameCard.map((card, index) => (
                            <MyCard key={`${card.rank}-${card.suit}-${index}`} rank={card.rank} suit={card.suit} />
                        ))}
                    </div>
                </>
            ) : (
                <p>Карт нет</p>
            )}
        </div>
    );
};

export default App;