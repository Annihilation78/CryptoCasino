import React from "react";
import { Card as MuiCard, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

// Crear estilos personalizados para el componente Card
const useCardStyles = makeStyles({
  root: {
    width: "60px",
    height: "90px",
    color: (props) => {
      // Determina el color de la fuente basado en las propiedades de la carta
      if (props.card === null || props.hide) {
        return "black";
      }
      return props.card.suit === "❤" || props.card.suit === "♦" ? "red" : "black";
    },
    border: "3px solid grey",
    borderRadius: "8px",
    boxShadow: "0 0 4px #000"
  },
  rootBack: {
    width: "60px",
    height: "90px",
    border: "3px solid grey",
    borderRadius: "8px",
    boxShadow: "0 0 4px #000",
    backgroundColor: "#000"
  },
  content: {
    width: "100%",
    height: "100%"
  },
  top: {
    fontSize: "22px",
    height: "30px",
    marginLeft: "5px"
  },
  middle: {
    fontSize: "50px",
    height: "60px",
    lineHeight: "60px"
  },
  bottom: {
    height: "30px",
    marginRight: "10px",
    display: "none"
  }
});

export default function Card({ card, hide }) {
  const classes = useCardStyles({ card, hide });
  const displayContent = card !== null && !hide;

  // Simplificar la selección de clases y contenido condicional
  const cardClass = displayContent ? classes.root : classes.rootBack;
  const topAndBottom = displayContent ? card.rank : "";
  const middle = displayContent ? card.suit : "";

  return (
    <MuiCard className={cardClass}>
      <Box className={classes.content} display="flex" flexDirection="column">
        <Box className={classes.top} alignSelf="flex-start">
          {topAndBottom}
        </Box>
        <Box className={classes.middle}>{middle}</Box>
        <Box className={classes.bottom} alignSelf="flex-end">
          {topAndBottom}
        </Box>
      </Box>
    </MuiCard>
  );
}
