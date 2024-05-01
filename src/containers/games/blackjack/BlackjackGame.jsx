// Blackjack/BlackjackGame.jsx

import React, { useState, useEffect } from 'react';
import { initializeDeck, shuffleDeck } from './Deck';  // Asegúrate de que la ruta es correcta

// El resto del componente sigue aquí...


const BlackjackGame = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [status, setStatus] = useState("Place your bets!");

  useEffect(() => {
    const newDeck = shuffleDeck(initializeDeck());
    setDeck(newDeck);
  }, []);

  const dealCards = () => {
    setDeck(currentDeck => {
      const newDeck = [...currentDeck];
      const newPlayerHand = [newDeck.pop(), newDeck.pop()];
      const newDealerHand = [newDeck.pop(), newDeck.pop()];
      setPlayerHand(newPlayerHand);
      setDealerHand(newDealerHand);
      setStatus("Playing");
      return newDeck;
    });
  };

  const hit = () => {
    if (status !== "Playing") return;
    setDeck(currentDeck => {
      const newDeck = [...currentDeck];
      setPlayerHand(currentHand => [...currentHand, newDeck.pop()]);
      return newDeck;
    });
  };

  const stand = () => {
    if (status !== "Playing") return;
    setStatus("Dealer's turn");
    dealerPlays();
  };

  const dealerPlays = () => {
    setDealerHand(currentHand => {
      let newHand = [...currentHand];
      let points = calculatePoints(newHand);
      while (points < 17) {
        newHand = [...newHand, deck.pop()];
        points = calculatePoints(newHand);
      }
      determineWinner(newHand);
      return newHand;
    });
  };

  const calculatePoints = (hand) => {
    let points = 0;
    let aces = 0;
    for (const card of hand) {
      if (card.value === 'A') {
        aces += 1;
        points += 11;
      } else if (['J', 'Q', 'K'].includes(card.value)) {
        points += 10;
      } else {
        points += parseInt(card.value, 10);
      }
    }
    while (points > 21 && aces) {
      points -= 10;
      aces -= 1;
    }
    return points;
  };

  const determineWinner = (dealerHand) => {
    const playerPoints = calculatePoints(playerHand);
    const dealerPoints = calculatePoints(dealerHand);
    if (playerPoints > 21) {
      setStatus("Player busts! Dealer wins.");
    } else if (dealerPoints > 21) {
      setStatus("Dealer busts! Player wins.");
    } else if (playerPoints > dealerPoints) {
      setStatus("Player wins!");
    } else if (dealerPoints > playerPoints) {
      setStatus("Dealer wins.");
    } else {
      setStatus("It's a tie!");
    }
  };

  return (
    <div>
      <h1>Blackjack</h1>
      <div>
        <h2>Player's Hand:</h2>
        {playerHand.map((card, index) => (
          <img key={index} src={card.imageUrl} alt={`${card.value} of ${card.suit}`} />
        ))}
        <h2>Dealer's Hand:</h2>
        {dealerHand.map((card, index) => (
          <img key={index} src={card.imageUrl} alt={`${card.value} of ${card.suit}`} />
        ))}
      </div>
      <div>
        <button onClick={dealCards}>Deal</button>
        <button onClick={hit}>Hit</button>
        <button onClick={stand}>Stand</button>
      </div>
      <p>{status}</p>
    </div>
  );
};

export default BlackjackGame;
