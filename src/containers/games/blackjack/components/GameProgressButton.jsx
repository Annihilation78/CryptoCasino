import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";

export default function GameProgressButton({ onClickNext, isTheLastGame }) {
  // Manejador de evento de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || (!isTheLastGame && event.key === "n") || (isTheLastGame && event.key === "f")) {
        onClickNext();
      } else {
        event.preventDefault();
      }
    };

    // Agregar listener de eventos
    document.body.addEventListener("keydown", handleKeyDown, { passive: true });

    // Limpiar listener al desmontar el componente
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown, { passive: true });
    };
  }, [onClickNext, isTheLastGame]); // Incluir las dependencias en useEffect

  return (
    <Box mt={1}>
      <Button variant="contained" onClick={onClickNext}>
        {isTheLastGame ? "FINISH" : "NEXT"}
      </Button>
    </Box>
  );
}
