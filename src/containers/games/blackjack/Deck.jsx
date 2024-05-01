// Blackjack/Deck.js
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Preparar para cargar todas las imágenes.
const loadImages = async () => {
    const images = {};
    for (let suit of suits) {
        for (let value of values) {
            const image = await import(`src/containers/games/blackjack/assets/${value}_of_${suit}.png`);
            images[`${value}_of_${suit}`] = image.default;
        }
    }
    return images;
};

let loadedImages;

// Cargar imágenes cuando el módulo es evaluado.
const imagesPromise = loadImages().then(images => {
    loadedImages = images;
});

export const initializeDeck = async () => {
    // Asegúrate de que las imágenes estén cargadas antes de inicializar el mazo.
    await imagesPromise;

    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({
                suit,
                value,
                imageUrl: loadedImages[`${value}_of_${suit}`]
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
