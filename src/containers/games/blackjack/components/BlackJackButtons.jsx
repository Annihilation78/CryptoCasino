import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

export default function BlackJackButtons({ onClickHit, onClickStand }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "h":
          onClickHit();
          break;
        case "s":
          onClickStand();
          break;
        default:
          break;
      }
    };

    // Agregar el listener de eventos
    document.body.addEventListener("keydown", handleKeyDown, { passive: false });

    // Función de limpieza para remover el listener de eventos
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown, { passive: false });
    };
  }, [onClickHit, onClickStand]); // Incluir funciones en el array de dependencias

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      mb={3}
      mt={"auto"}
    >
      <Box mx={1}>
        <Button variant="contained" onClick={onClickHit}>
          HIT
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={onClickStand}>
          STAND
        </Button>
      </Box>
    </Box>
  );
}
