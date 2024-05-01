import React from "react";
import { Box, Grid, Chip } from '@mui/material';
import { useStyles } from "../hooks/useStyles";
import Card from "./Card";
import * as BJUtilities from "../utilities/BlackJackUtilities";

export default function PlayArea({ dealersHand, playersHand, isTurnEnd }) {
  const classes = useStyles();

  return (
    <Box className={classes.playArea}>
      <Grid
        container
        direction="column"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box
            className="arrow_box_common arrow_box_dealer"
            style={{ visibility: isTurnEnd ? 'visible' : 'hidden' }}
          >
            {dealersHand.length > 0 && BJUtilities.getScoreForDisplay(dealersHand)}
          </Box>
          <Grid container direction="row">
            {dealersHand.map((card, index) => (
              <Grid item key={index} style={{ marginLeft: index === 0 ? '0px' : '-35px' }}>
                <Card card={card} hide={index === 1 && !isTurnEnd} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            {playersHand.map((card, index) => (
              <Grid item key={index} style={{ marginLeft: index === 0 ? '0px' : '-35px' }}>
                <Card card={card} hide={false} />
              </Grid>
            ))}
          </Grid>
          <Box className={classes.winOrLoseContainer}>
            {isTurnEnd && (
              <Chip
                label={BJUtilities.judge(dealersHand, playersHand)}
                className={classes.winOrLose}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Box className="arrow_box_common arrow_box_player" mt={2}>
        {playersHand.length > 0 && BJUtilities.getScoreForDisplay(playersHand)}
      </Box>
    </Box>
  );
}
