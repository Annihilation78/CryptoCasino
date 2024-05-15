import './Blackjack.css';
import React, { useState } from 'react';
import Deck from './Deck.jsx';
import Header from '../../Header.jsx';
import Footer from '../../Footer.jsx';
import $ from 'jquery';

export default function Game() {
  // Dealer cards
  const [card1BG, setCard1BG] = useState('');
  const [card2BG, setCard2BG] = useState('https://i.pinimg.com/originals/09/a5/8d/09a58d561b2a7b92bd506c83414ef1ab.png');
  const [tempCard2, setTempCard2] = useState('');

  // User cards
  const [card3BG, setCard3BG] = useState('');
  const [card4BG, setCard4BG] = useState('');
  const [userCardExtra1BG, setUserCardExtra1BG] = useState('');
  const [userCardExtra2BG, setUserCardExtra2BG] = useState('');
  const [userCardExtra3BG, setUserCardExtra3BG] = useState('');
  const [dCardExtra1BG, setDCardExtra1BG] = useState('');
  const [dCardExtra2BG, setDCardExtra2BG] = useState('');
  const [dCardExtra3BG, setDCardExtra3BG] = useState('');

  // Game directions
  const [turnDirections, setTurnDirections] = useState('- Press DEAL to begin');
  const [dealerDirections, setDealerDirections] = useState('');

  // Betting chip values
  const [chipVisibilityRed, setChipVisibilityRed] = useState('hidden');
  const [chipAmountRed, setChipAmountRed] = useState(0);
  const [chipBetRed, setChipBetRed] = useState(0);

  const [chipVisibilityBlack, setChipVisibilityBlack] = useState('hidden');
  const [chipAmountBlack, setChipAmountBlack] = useState(0);
  const [chipBetBlack, setChipBetBlack] = useState(0);

  const [chipVisibilityBlue, setChipVisibilityBlue] = useState('hidden');
  const [chipAmountBlue, setChipAmountBlue] = useState(0);
  const [chipBetBlue, setChipBetBlue] = useState(0);

  const [chipVisibilityGreen, setChipVisibilityGreen] = useState('hidden');
  const [chipAmountGreen, setChipAmountGreen] = useState(0);
  const [chipBetGreen, setChipBetGreen] = useState(0);

  // Cashier chip values
  const [cashierChipAmountRed, setCashierChipAmountRed] = useState(0);
  const [cashierChipAmountBlack, setCashierChipAmountBlack] = useState(0);
  const [cashierChipAmountBlue, setCashierChipAmountBlue] = useState(0);
  const [cashierChipAmountGreen, setCashierChipAmountGreen] = useState(0);

  const [chipCostSubtotal, setChipCostSubtotal] = useState(0);
  const [userBank, setUserBank] = useState(100);

  // Temporary card values
  let url = '';
  let card1 = '';
  let card2 = '';
  let card3 = '';
  let card4 = '';

  // Hit button visibility
  const [pec1Visibility, setPec1Visibility] = useState('hidden');
  const [pec2Visibility, setPec2Visibility] = useState('hidden');
  const [pec3Visibility, setPec3Visibility] = useState('hidden');

  const [dec1Visibility, setDec1Visibility] = useState('hidden');
  const [dec2Visibility, setDec2Visibility] = useState('hidden');
  const [dec3Visibility, setDec3Visibility] = useState('hidden');

  let extraCard1 = '';
  let extraCard2 = '';
  let extraCard3 = '';

  let extraDCard1 = '';
  let extraDCard2 = '';
  let extraDCard3 = '';

  // Deal button clicked
  function handleOnDeal() {
    if (
      chipAmountRed === 0 &&
      chipAmountBlack === 0 &&
      chipAmountBlue === 0 &&
      chipAmountGreen === 0
    ) {
      alert("¡No tienes ninguna ficha!\nCompra fichas abajo en la sección de compra.");
    } else {
      // Shuffle new deck
      $.ajax({
        url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
        dataType: 'json',
        async: false,
        success: function (response) {
          console.log('shuffled, deck_id: ' + response.deck_id);
          url = 'https://deckofcardsapi.com/api/deck/' + response.deck_id + '/draw/?count=10';
          console.log(url);
        },
        error: function (error) {
          alert('AJAX Error');
          console.log(error);
        },
      });

      // Deal cards to player and dealer
      $.ajax({
        url: url,
        dataType: 'json',
        async: false,
        success: function (response) {
          for (let i = 0; i < 10; i++) {
            if (card1 === '') {
              document.querySelector('#dc1').style.visibility = 'visible';
              card1 = response.cards[i].image;
              setCard1BG(card1);
            } else if (card2 === '') {
              document.querySelector('#dc2').style.visibility = 'visible';
              card2 = response.cards[i].image;
              setTempCard2(card2);
            } else if (card3 === '') {
              document.querySelector('#pc1').style.visibility = 'visible';
              card3 = response.cards[i].image;
              setCard3BG(card3);
            } else if (card4 === '') {
              document.querySelector('#pc2').style.visibility = 'visible';
              card4 = response.cards[i].image;
              setCard4BG(card4);
            } else if (extraCard1 === '') {
              extraCard1 = response.cards[i].image;
              setUserCardExtra1BG(extraCard1);
            } else if (extraCard2 === '') {
              extraCard2 = response.cards[i].image;
              setUserCardExtra2BG(extraCard2);
            } else if (extraCard3 === '') {
              extraCard3 = response.cards[i].image;
              setUserCardExtra3BG(extraCard3);
            } else if (extraDCard1 === '') {
              extraDCard1 = response.cards[i].image;
              setDCardExtra1BG(extraDCard1);
            } else if (extraDCard2 === '') {
              extraDCard2 = response.cards[i].image;
              setDCardExtra2BG(extraDCard2);
            } else {
              extraDCard3 = response.cards[i].image;
              setDCardExtra3BG(extraDCard3);
            }
          }
          document.querySelector('#game-start').style.pointerEvents = 'none';
          document.querySelector('#game-start').style.backgroundColor = '#8b1b22';
          document.querySelector('#game-start').style.borderColor = '#8b1b22';

          let hitPassBtns = document.querySelectorAll('.hit-pass');
          hitPassBtns.forEach((item) => {
            item.style.visibility = 'visible';
          });

          setTurnDirections('- Bet, then Hit or Pass');
          console.log(card1 + ', ' + card2 + ', ' + card3 + ', ' + card4);
        },
        error: function (error) {
          alert('AJAX Error.');
          console.log(error);
        },
      });
    }
  }

  function checkCardValue(value) {
    value = value.toUpperCase();
    if (
      value.indexOf('J') > -1 ||
      value.indexOf('Q') > -1 ||
      value.indexOf('K') > -1 ||
      value.indexOf('0') > -1 ||
      value.indexOf('1') > -1
    ) {
      return 10;
    } else if (value.indexOf('A') > -1) {
      return 1;
    } else {
      return parseInt(value);
    }
  }

  const playerCard1 = checkCardValue(card3BG.substr(38, 1));
  const playerCard2 = checkCardValue(card4BG.substr(38, 1));
  const playerCard3 = checkCardValue(userCardExtra1BG.substr(38, 1));
  const playerCard4 = checkCardValue(userCardExtra2BG.substr(38, 1));
  const playerCard5 = checkCardValue(userCardExtra3BG.substr(38, 1));

  let userTotal = 0;

  function handleOnHit() {
    if (playerCard1 + playerCard2 === 21) {
      alert('WIN!');
    } else {
      if (pec1Visibility === 'hidden') {
        setPec1Visibility('visible');
        if (playerCard1 + playerCard2 + playerCard3 >= 21) {
          alert('21 Reached or exceeded!');
          userTotal = playerCard1 + playerCard2 + playerCard3;
          setTurnDirections('- Total: ' + userTotal);
          let hitPassBtns = document.querySelectorAll('.hit-pass');
          hitPassBtns.forEach((item) => {
            item.style.visibility = 'hidden';
          });
          setDealerDirections('- turn');
          setTurnDirections('- Total: ' + userTotal);
          setTimeout(dealerTurn, 2000);
        }
      } else if (pec2Visibility === 'hidden') {
        setPec2Visibility('visible');
        if (playerCard1 + playerCard2 + playerCard3 + playerCard4 >= 21) {
          alert('21 Reached or exceeded!');
          userTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4;
          setTurnDirections('- Total: ' + userTotal);
          let hitPassBtns = document.querySelectorAll('.hit-pass');
          hitPassBtns.forEach((item) => {
            item.style.visibility = 'hidden';
          });
          setDealerDirections('- turn');
          setTurnDirections('- Total: ' + userTotal);
          setTimeout(dealerTurn, 2000);
        }
      } else if (pec3Visibility === 'hidden') {
        setPec3Visibility('visible');
        userTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5;
        setTurnDirections('- Total: ' + userTotal);
        setDealerDirections('- turn');
        setTimeout(dealerTurn, 2000);
      }
    }
  }

  function handleOnPass() {
    if (playerCard1 + playerCard2 === 21) {
      alert('WIN!');
    } else {
      if (pec3Visibility === 'visible') {
        userTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5;
        setTurnDirections('- Total: ' + userTotal);
      } else if (pec2Visibility === 'visible') {
        userTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4;
        setTurnDirections('- Total: ' + userTotal);
      } else if (pec1Visibility === 'visible') {
        userTotal = playerCard1 + playerCard2 + playerCard3;
        setTurnDirections('- Total: ' + userTotal);
      } else {
        userTotal = playerCard1 + playerCard2;
        setTurnDirections('- Total: ' + userTotal);
      }
      let hitPassBtns = document.querySelectorAll('.hit-pass');
      hitPassBtns.forEach((item) => {
        item.style.visibility = 'hidden';
      });
      setDealerDirections('- turn');
      setTimeout(dealerTurn, 2000);
    }
  }

  function dealerTurn() {
    setDealerDirections('- hit or pass');
    setCard2BG(tempCard2);

    setTimeout(dealerBets, 2000);
    setDealerDirections('- doubling bets');

    setTimeout(dealerTotaled, 2000);
  }

  function dealerBets() {
    setChipBetRed(parseInt(chipBetRed) * 2);
    setChipBetBlack(parseInt(chipBetBlack) * 2);
    setChipBetBlue(parseInt(chipBetBlue) * 2);
    setChipBetGreen(parseInt(chipBetGreen) * 2);
  }

  let dealerTotal = 0;

  function dealerTotaled() {
    const dealerCard1 = checkCardValue(card1BG.substr(38, 1));
    const dealerCard2 = checkCardValue(tempCard2.substr(38, 1));
    const dealerCard3 = checkCardValue(dCardExtra1BG.substr(38, 1));
    const dealerCard4 = checkCardValue(dCardExtra2BG.substr(38, 1));
    const dealerCard5 = checkCardValue(dCardExtra3BG.substr(38, 1));
    dealerTotal = dealerCard1 + dealerCard2;
    for (let i = 0; i < 5; i++) {
      if (dealerCard1 + dealerCard2 < 17) {
        setDec1Visibility('visible');
        dealerTotal = dealerCard1 + dealerCard2 + dealerCard3;
      }
      if (
        dec1Visibility === 'visible' &&
        dealerCard1 + dealerCard2 + dealerCard3 < 17
      ) {
        setDec2Visibility('visible');
        dealerTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4;
      }
      if (
        dec2Visibility === 'visible' &&
        dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 < 17
      ) {
        setDec3Visibility('visible');
        dealerTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5;
      }
    }
    setDealerDirections('- Total: ' + dealerTotal);
    setTimeout(winResults, 1000);
  }

  function winResults() {
    // Calculate initial winnings based on the chips bet and their multipliers
    let winnings = chipBetRed * 1 + chipBetBlack * 5 + chipBetBlue * 25 + chipBetGreen * 50;

    if (userTotal > 21) {
      // User loses if they go over 21
      alert('The dealer beat you, better luck next time!\nYou went over 21.\nYou lost $' + winnings + '.');
      winnings *= -1; // Convert winnings to a loss
    } else if (userTotal > dealerTotal && dealerTotal <= 21) {
      // User wins by having a higher total than the dealer, without exceeding 21
      alert('You won!\nYour earnings total to $' + winnings + '.');
    } else if (userTotal < dealerTotal && dealerTotal <= 21) {
      // User loses by having a lower total than the dealer
      alert('The dealer beat you, better luck next time!\nYou lost $' + winnings + '.');
      winnings *= -1;
    } else if (userTotal === dealerTotal && dealerTotal <= 21) {
      // Handle tie scenario
      let tieWinnings = winnings / 2; // User gets half of the winnings in a tie
      alert('You tied with the dealer. You will receive half of the winnings, totaling to $' + tieWinnings + '.');
      winnings = tieWinnings;
    }

    // Update the user's bank balance with the new winnings or losses
    setUserBank(userBank + winnings);
    refreshGame(); // Refresh or update the game state
  }

  function refreshGame() {
    setTurnDirections('- Press DEAL to play again');

    let hitPassBtns = document.querySelectorAll('.hit-pass');
    hitPassBtns.forEach((item) => {
      item.style.visibility = 'hidden';
    });

    document.querySelector('#game-start').style.pointerEvents = 'auto';
    document.querySelector('#game-start').style.backgroundColor = '#d12d36';
    document.querySelector('#game-start').style.borderColor = '#d12d36';

    document.querySelector('#pc1').style.visibility = 'visible';
    document.querySelector('#pc2').style.visibility = 'visible';

    document.querySelector('#dc1').style.visibility = 'visible';
    document.querySelector('#dc1').style.visibility = 'visible';

    setPec1Visibility('hidden');
    setPec2Visibility('hidden');
    setPec3Visibility('hidden');

    setDec1Visibility('hidden');
    setDec2Visibility('hidden');
    setDec3Visibility('hidden');

    setChipBetRed(0);
    setChipBetBlack(0);
    setChipBetBlue(0);
    setChipBetGreen(0);

    setChipVisibilityRed('hidden');
    setChipVisibilityBlack('hidden');
    setChipVisibilityBlue('hidden');
    setChipVisibilityGreen('hidden');
  }

  // Bet chip and user chip actions
  function handleOnClickChipRed() {
    if (chipAmountRed > 0) {
      setChipVisibilityRed('visible');
      setChipAmountRed(chipAmountRed - 1);
      setChipBetRed(chipBetRed + 1);
    }
  }

  function handleOnClickChipBlack() {
    if (chipAmountBlack > 0) {
      setChipVisibilityBlack('visible');
      setChipAmountBlack(chipAmountBlack - 1);
      setChipBetBlack(chipBetBlack + 1);
    }
  }

  function handleOnClickChipBlue() {
    if (chipAmountBlue > 0) {
      setChipVisibilityBlue('visible');
      setChipAmountBlue(chipAmountBlue - 1);
      setChipBetBlue(chipBetBlue + 1);
    }
  }

  function handleOnClickChipGreen() {
    if (chipAmountGreen > 0) {
      setChipVisibilityGreen('visible');
      setChipAmountGreen(chipAmountGreen - 1);
      setChipBetGreen(chipBetGreen + 1);
    }
  }

  // Coming soon page
  function handleComingSoon() {
    open('https://static.vecteezy.com/system/resources/previews/002/115/431/original/coming-soon-business-sign-free-vector.jpg');
  }

  return (
    <div className="App">
      <Header title="Blackjack" />
      <div className="section" id="game">
        <h2>
          Dealer <em>{dealerDirections}</em>
        </h2>
        <img className="card" id="dc1" src={card1BG} alt="dealer card 1" />
        <img className="card" id="dc2" src={card2BG} alt="dealer card 2" />
        <img
          className="card"
          id="dec1"
          src={dCardExtra1BG}
          alt="dealer extra card 1"
          style={{ visibility: dec1Visibility }}
        />
        <img
          className="card"
          id="dec2"
          src={dCardExtra2BG}
          alt="dealer extra card 2"
          style={{ visibility: dec2Visibility }}
        />
        <img
          className="card"
          id="dec3"
          src={dCardExtra3BG}
          alt="dealer extra card 3"
          style={{ visibility: dec3Visibility }}
        />
        <div id="bets-placed">
          <div id="player-turn">
            <div className="hit-pass" onClick={handleOnHit}>
              Hit
            </div>
            <div className="hit-pass" onClick={handleOnPass}>
              Pass
            </div>
          </div>
          <Deck />
          <BetChip
            amount={chipBetRed}
            chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/2.png"
            bgSize="109%"
            show={chipVisibilityRed}
            unique="red"
            price="1"
          />
          <BetChip
            amount={chipBetBlack}
            chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/4.png"
            bgSize="cover"
            show={chipVisibilityBlack}
            unique="black"
            price="5"
          />
          <BetChip
            amount={chipBetBlue}
            chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/1.png"
            bgSize="150%"
            show={chipVisibilityBlue}
            unique="blue"
            price="25"
          />
          <BetChip
            amount={chipBetGreen}
            chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/3.png"
            bgSize="199%"
            show={chipVisibilityGreen}
            unique="green"
            price="50"
          />
          <div className="button" id="game-start" onClick={handleOnDeal}>
            DEAL
          </div>
        </div>
        <h2>
          You <em> {turnDirections}</em>
        </h2>
        <img className="card" id="pc1" src={card3BG} alt="player card 1" />
        <img className="card" id="pc2" src={card4BG} alt="player card 2" />
        <img
          className="card"
          id="pec1"
          src={userCardExtra1BG}
          alt="player extra card 1"
          style={{ visibility: pec1Visibility }}
        />
        <img
          className="card"
          id="pec2"
          src={userCardExtra2BG}
          alt="player extra card 2"
          style={{ visibility: pec2Visibility }}
        />
        <img
          className="card"
          id="pec3"
          src={userCardExtra3BG}
          alt="player extra card 3"
          style={{ visibility: pec3Visibility }}
        />
        <br />
        <Chip
          amount={chipAmountRed}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/2.png"
          bgSize="109%"
          clickHandlerName={handleOnClickChipRed}
          unique="red"
          price="1"
        />
        <Chip
          amount={chipAmountBlack}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/4.png"
          bgSize="cover"
          clickHandlerName={handleOnClickChipBlack}
          unique="black"
          price="5"
        />
        <Chip
          amount={chipAmountBlue}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/1.png"
          bgSize="150%"
          clickHandlerName={handleOnClickChipBlue}
          unique="blue"
          price="25"
        />
        <Chip
          amount={chipAmountGreen}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/3.png"
          bgSize="199%"
          clickHandlerName={handleOnClickChipGreen}
          unique="green"
          price="50"
        />
      </div>
      <div className="section" id="cashier">
        <h2>Cashier</h2>
        <CashierChips />
        <PurchasedChips />
        <h3>
          SUBTOTAL: $<span>{chipCostSubtotal}</span>
        </h3>
        <h3>
          Bank Account: $<span>{userBank}</span>
        </h3>
        <div className="button" id="purchase" onClick={handleOnPurchase}>
          Purchase
        </div>
        <div className="button" id="refresh" onClick={handleOnRefresh}>
          Restart
        </div>
      </div>
      <Footer />
    </div>
  );

  function BetChip(props) {
    return (
      <div id="bets">
        <div
          id="bet-chip"
          style={{
            content: 'url(' + props.chipColor + ')',
            backgroundSize: props.bgSize,
            visibility: props.show,
          }}
        >
          <p id="chip-amt">{props.amount}x</p>
        </div>
      </div>
    );
  }

  function Chip(props) {
    return (
      <div id="bets">
        <div
          id="chip"
          onClick={() => props.clickHandlerName()}
          style={{
            content: 'url(' + props.chipColor + ')',
            backgroundSize: props.bgSize,
          }}
        >
          <p id="chip-amt">{props.amount}x</p>
        </div>
      </div>
    );
  }

  function onClickPlus(u) {
    if (u === 'red') {
      setCashierChipAmountRed(cashierChipAmountRed + 1);
      setChipCostSubtotal(chipCostSubtotal + 1);
    } else if (u === 'black') {
      setCashierChipAmountBlack(cashierChipAmountBlack + 1);
      setChipCostSubtotal(chipCostSubtotal + 5);
    } else if (u === 'blue') {
      setCashierChipAmountBlue(cashierChipAmountBlue + 1);
      setChipCostSubtotal(chipCostSubtotal + 25);
    } else if (u === 'green') {
      setCashierChipAmountGreen(cashierChipAmountGreen + 1);
      setChipCostSubtotal(chipCostSubtotal + 50);
    }
  }

  function onClickMinus(u) {
    if (u === 'red' && cashierChipAmountRed > 0) {
      setCashierChipAmountRed(cashierChipAmountRed - 1);
      setChipCostSubtotal(chipCostSubtotal - 1);
    } else if (u === 'black' && cashierChipAmountBlack > 0) {
      setCashierChipAmountBlack(cashierChipAmountBlack - 1);
      setChipCostSubtotal(chipCostSubtotal - 5);
    } else if (u === 'blue' && cashierChipAmountBlue > 0) {
      setCashierChipAmountBlue(cashierChipAmountBlue - 1);
      setChipCostSubtotal(chipCostSubtotal - 25);
    } else if (u === 'green' && cashierChipAmountGreen > 0) {
      setCashierChipAmountGreen(cashierChipAmountGreen - 1);
      setChipCostSubtotal(chipCostSubtotal - 50);
    }
  }

  function handleOnPurchase() {
    if (chipCostSubtotal > userBank) {
      alert('Not enough money in account. Decrease cost of chips.\n\n If bank account is negative, you went bankrupt. Please restart the game to keep playing.');
    } else {
      setUserBank(userBank - chipCostSubtotal);

      setChipAmountRed(chipAmountRed + cashierChipAmountRed);
      setChipAmountBlack(chipAmountBlack + cashierChipAmountBlack);
      setChipAmountBlue(chipAmountBlue + cashierChipAmountBlue);
      setChipAmountGreen(chipAmountGreen + cashierChipAmountGreen);

      setCashierChipAmountRed(0);
      setCashierChipAmountBlack(0);
      setCashierChipAmountBlue(0);
      setCashierChipAmountGreen(0);
      setChipCostSubtotal(0);
    }
  }

  function handleOnRefresh() {
    let userResponse = prompt('Are you sure you want to restart the game?\nthis will clear all progress.\n\nType "y" for yes, all other characters assume no.');
    if (userResponse.toLowerCase() === 'y') {
      window.location.reload(false);
    }
  }

  function CashierChips(props) {
    return (
      <div id="all-cashier-chips">
        <SingleCashierChip
          amount={cashierChipAmountRed}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/2.png"
          bgSize="109%"
          unique="red"
          price="1"
        />
        <SingleCashierChip
          amount={cashierChipAmountBlack}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/4.png"
          bgSize="cover"
          unique="black"
          price="5"
        />
        <SingleCashierChip
          amount={cashierChipAmountBlue}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/1.png"
          bgSize="150%"
          unique="blue"
          price="25"
        />
        <SingleCashierChip
          amount={cashierChipAmountGreen}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/3.png"
          bgSize="199%"
          unique="green"
          price="50"
        />
      </div>
    );
  }

  function PurchasedChips(props) {
    return (
      <div id="all-cashier-chips">
        <SinglePurchasedChip
          amount={chipAmountRed}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/2.png"
          bgSize="109%"
          unique="red"
          price="1"
        />
        <SinglePurchasedChip
          amount={chipAmountBlack}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/4.png"
          bgSize="cover"
          unique="black"
          price="5"
        />
        <SinglePurchasedChip
          amount={chipAmountBlue}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/1.png"
          bgSize="150%"
          unique="blue"
          price="25"
        />
        <SinglePurchasedChip
          amount={chipAmountGreen}
          chipColor="https://github.com/Annihilation78/CryptoCasino/raw/main/src/containers/games/blackjack/chips/3.png"
          bgSize="199%"
          unique="green"
          price="50"
        />
      </div>
    );
  }

  function SingleCashierChip(props) {
    let chipCost = parseInt(props.price) * props.amount;
    return (
      <div id="cashier-chip-ctn">
        <div id="minus-icon" onClick={() => onClickMinus(props.unique)}>
          -
        </div>
        <div id="plus-icon" onClick={() => onClickPlus(props.unique)}>
          +
        </div>
        <div
          id="cashier-chips"
          style={{
            content: 'url(' + props.chipColor + ')',
            backgroundSize: props.bgSize,
          }}
        >
          {chipCost}
          <p id="cashier-chip-amt">
            {props.amount}x = ${chipCost}
          </p>
          <p id="cashier-chip-value">
            Valor del chip: ${props.price}
          </p>
        </div>
      </div>
    );
  }

  function SinglePurchasedChip(props) {
    return (
      <div id="cashier-chip-ctn">
        <div
          id="cashier-chips"
          style={{
            content: 'url(' + props.chipColor + ')',
            backgroundSize: props.bgSize,
          }}
        >
          {props.amount}x
          <p id="cashier-chip-amt">{props.amount}x</p>
        </div>
      </div>
    );
  }
}
