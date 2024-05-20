import './App.css';
import MyCard from './components/card/card';
import Card from './lib/Card.ts';
import CardDeck from './lib/СardDeck.ts';
import { useState } from 'react';

const App: React.FC = () => {
    const [cardDeck] = useState<CardDeck>(() => {
        const newDeck = new CardDeck();
        return newDeck;
    });

    const [dealtCards, setDealtCards] = useState<Card[]>([]);
    const dealCards = () => {
        if (cardDeck) {
            const newCards = cardDeck.getCards(5);
            setDealtCards(newCards);
        }
    };

    return (
        <div className="App">
            <button onClick={dealCards}>Раздать карты</button>
            {dealtCards.length > 0 ? (
                <>
                    <p>Карты есть</p>
                    <div className="playingCards faceImages">
                        {dealtCards.map((card, index) => (
                            <MyCard key={`${card.rank}-${card.suit}-${index}`} rank={card.rank} suit={card.suit}/>
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