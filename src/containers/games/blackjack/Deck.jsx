// Blackjack/Deck.js
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const images = values.reduce((acc, value) => {
  suits.forEach(suit => {
    // Importa y asigna cada imagen usando import dinámico, que retorna una promesa
    acc[`${value}_of_${suit}`] = import(`../assets/${value}_of_${suit}.png`);
  });
  return acc;
}, {});

export const initializeDeck = async () => {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({
        suit,
        value,
        imageUrl: await images[`${value}_of_${suit}`] // Espera a que la promesa se resuelva
      });
    }
  }
  return deck;
};
