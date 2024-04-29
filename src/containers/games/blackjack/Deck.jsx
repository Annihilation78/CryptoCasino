// Blackjack/Deck.js

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export const initializeDeck = () => {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({
        suit,
        value,
        imageUrl: `../assets/${value}_of_${suit}.png` // Asegúrate de tener imágenes para cada carta o ajusta según tus recursos
      });
    }
  }
  return deck;
};

export const shuffleDeck = (deck) => {
  let deckCopy = [...deck];
  for (let i = deckCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
  }
  return deckCopy;
};
