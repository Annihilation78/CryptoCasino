import { sum } from 'lodash';

export function getDeck(numberOfDecks = 1) {
  const suits = ["♠", "♣", "❤", "♦"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return Array.from({ length: numberOfDecks }, () => suits.flatMap(suit => ranks.map(rank => ({ suit, rank })))).flat();
}

export function getRankNum(rank) {
  return ['J', 'Q', 'K'].includes(rank) ? 10 : rank === 'A' ? 1 : parseInt(rank);
}

export function getTotal(hand) {
  return hand.reduce((acc, card) => acc + getRankNum(card.rank), 0);
}

export function hasAce(hand) {
  return hand.some(card => card.rank === 'A');
}

export function checkDealersScore(hand) {
  return getTotal(hand) < 17 || (isSoftHand(hand) && getTotal(hand) + 10 < 17);
}

export function isFaceCardOrTen(card) {
  return getRankNum(card.rank) === 10;
}

export function isSoftHand(hand) {
  return hasAce(hand) && getTotal(hand) + 10 <= 21;
}

export function isBlackJack(hand) {
  return hand.length === 2 && ((isAce(hand[0]) && isFaceCardOrTen(hand[1])) || (isFaceCardOrTen(hand[0]) && isAce(hand[1])));
}

export function getScore(hand) {
  const total = getTotal(hand);
  if (isBlackJack(hand)) {
    return [21];
  }
  if (isSoftHand(hand)) {
    return [total, total + 10];
  }
  return [total];
}

export function getScoreForDisplay(hand) {
  const scores = getScore(hand);
  return isSoftHand(hand) ? `${scores[0]} | ${scores[1]}` : scores[0].toString();
}

export function getLastScore(hand) {
  const scores = getScore(hand);
  return scores[scores.length - 1];
}

export function judge(dealersHand, playersHand) {
  const dealersScore = getLastScore(dealersHand);
  const playersScore = getLastScore(playersHand);

  if (getTotal(playersHand) > 21) return "LOSE!!";
  if (isBlackJack(playersHand)) return "BLACK JACK!!";
  if (isBlackJack(dealersHand)) return "LOSE!!";
  if (dealersScore > 21) return "WIN!!";
  if (playersScore > 21) return "LOSE!!";
  if (dealersScore === playersScore) return "PUSH";
  return dealersScore < playersScore ? "WIN!!" : "LOSE!!";
}
