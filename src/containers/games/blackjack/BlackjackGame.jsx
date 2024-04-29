// Blackjack/BlackjackGame.js

import React, { useState, useEffect } from 'react';
import { initializeDeck, shuffleDeck } from './Deck';

const BlackjackGame = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [status, setStatus] = useState("Place your bets!");

  useEffect(() => {
    setDeck(shuffleDeck(initializeDeck()));
  }, []);

  const dealCards = () => {
    setPlayerHand([deck.pop(), deck.pop()]);
    setDealerHand([deck.pop(), deck.pop()]);
    setStatus("Playing");
  };

  const hit = () => {
    if (status !== "Playing") return;
    setPlayerHand([...playerHand, deck.pop()]);
  };

  const stand = () => {
    if (status !== "Playing") return;
    setDealerHand([...dealerHand, deck.pop()]);
    setStatus("Dealer's turn");
    dealerPlays();
  };

  const dealerPlays = () => {
    // Simple AI for dealer: keep hitting until reaching 17 or more
    let points = calculatePoints(dealerHand);
    while (points < 17) {
      setDealerHand([...dealerHand, deck.pop()]);
      points = calculatePoints(dealerHand);
    }
    determineWinner();
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

  const determineWinner = () => {
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
        {playerHand.map(card => (
          <img key={card.suit + card.value} src={card.imageUrl} alt={`${card.value} of ${card.suit}`} />
        ))}
        <h2>Dealer's Hand:</h2>
        {dealerHand.map(card => (
          <img key={card.suit + card.value} src={card.imageUrl} alt={`${card.value} of ${card.suit}`} />
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
