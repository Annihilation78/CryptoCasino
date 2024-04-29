import React from 'react';
import './Chips.css';

function Chip({ active, id }) {
  if (active) {
    return <div className="chip d-inline-block" id={id}>10</div>;
  } else {
    return <div>{id}</div>;
  }
}

export default Chip;