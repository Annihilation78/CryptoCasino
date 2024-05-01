// Blackjack/Deck.js
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const images = values.reduce((acc, value) => {
  suits.forEach(suit => {
    // Importa y asigna cada imagen a un objeto
    acc[`${value}_of_${suit}`] = require(`../assets/${value}_of_${suit}.png`);
  });
  return acc;
}, {});

export const initializeDeck = () => {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({
        suit,
        value,
        imageUrl: images[`${value}_of_${suit}`] // Usamos el objeto con las imágenes importadas
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
