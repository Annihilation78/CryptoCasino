import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "../hooks/useStyles";

export default function Message({ children }) {
  const classes = useStyles();

  // Verificar si children es un array y renderizar correctamente
  const content = Array.isArray(children) ? 
    children.map((line, index) => <Box key={index}>{line}</Box>) : 
    <Box>{children}</Box>;

  return (
    <Box>
      <Typography variant="h3" className={classes.message}>
        {content}
      </Typography>
    </Box>
  );
}
