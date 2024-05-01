import React, { useEffect, useReducer } from "react";
import {Box} from '@mui/material/Box';
import {useStyles} from "./hooks/useStyles";
import PlayArea from "./components/PlayArea";
import BlackJackButtons from "./components/BlackJackButtons";
import GameProgressButton from "./components/GameProgressButton";
import * as BlackJackUtilities from "./utilities/BlackJackUtilities";
import {toast, Toaster} from "react-hot-toast";

const initialDeck = BlackJackUtilities.getDeck(3);
const penetration = 0.8;

function getMinimumNumber(deckLength, penetration) {
  return Math.floor(deckLength * (1 - penetration));
}

const initialState = {
  deck: initialDeck,
  minimumNumber: getMinimumNumber(initialDeck.length, penetration),
  dealersHand: [],
  playersHand: [],
  isTurnEnd: false
};

function reducer(state, action) {
  switch (action.type) {
    case "init": {
      const [deckAfterDealer, dealersHand] = deal(state.deck, [], 2);
      const [deckAfterPlayer, playersHand] = deal(deckAfterDealer, [], 2);
      return { ...state, deck: deckAfterPlayer, dealersHand, playersHand, isTurnEnd: false };
    }
    case "hit": {
      const [newDeck, newHand] = deal(state.deck, state.playersHand, 1);
      return { ...state, deck: newDeck, playersHand: newHand };
    }
    case "stand": {
      const [newDeck, newHand] = dealForDealer(state.deck, state.dealersHand);
      return { ...state, deck: newDeck, dealersHand: newHand, isTurnEnd: true };
    }
    case "shuffle": {
      const newDeck = BlackJackUtilities.getDeck(3);
      toast("Deck shuffled!", {
        style: {
          borderRadius: "10px",
          background: "#737373",
          color: "#ffffff"
        }
      });
      return { ...state, deck: newDeck };
    }
    default:
      return state;
  }
}

export default function Border7() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  useEffect(() => {
    if (state.deck.length <= state.minimumNumber) {
      dispatch({ type: "shuffle" });
    }
  }, [state.deck.length, state.minimumNumber]);

  function doHit() {
    dispatch({ type: "hit" });
  }

  function doStand() {
    dispatch({ type: "stand" });
  }

  function next() {
    dispatch({ type: "init" });
  }

  return (
    <Box>
      <Toaster position="bottom-center" reverseOrder={false} />
      <PlayArea
        dealersHand={state.dealersHand}
        playersHand={state.playersHand}
        isTurnEnd={state.isTurnEnd}
      />
      <div className={classes.coinArea}>Coin area</div>
      <Box className={classes.messageArea}>
        {(BlackJackUtilities.getTotal(state.playersHand) > 21 || state.isTurnEnd) ? 
          <GameProgressButton onClickNext={next} /> : 
          <BlackJackButtons onClickHit={doHit} onClickStand={doStand} />
        }
      </Box>
    </Box>
  );
}
