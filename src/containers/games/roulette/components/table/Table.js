import React, { useState, useEffect } from 'react';
import './Table.css';
import Chip from '../chips/Chips';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

function RouletteTable({ firstRow, firstBorder, secondRow, secondBorder, thirdRow, thirdBorder, fourthRow, fifthRow, columnLeft, columnRight, spinning, arr, coins, chip, updateRow, updateArr, updateCoins }) {
  const [state, setState] = useState({
    firstRow,
    firstBorder,
    secondRow,
    secondBorder,
    thirdRow,
    thirdBorder,
    fourthRow,
    fifthRow,
    columnLeft,
    columnRight,
    disabled: false
  });

  useEffect(() => {
    setState(prevState => ({ ...prevState, disabled: spinning }));
  }, [spinning]);

  const numsSelectionHandler = (num, whichRow) => {
    let nums = arr.length === 0 ? [] : [...arr];
    let row = [...state[whichRow]];
    let coinsUpdate;

    if (nums.includes(num)) {
      nums = nums.filter(n => n !== num);
      coinsUpdate = coins + chip;
      let updatedRow = row.map(chip => {
        if (chip.n === num) {
          chip.visible = false;
        }
        return chip;
      });
      updateRow(whichRow, updatedRow);
      setState(prevState => ({ ...prevState, [whichRow]: updatedRow }));
    } else {
      coinsUpdate = coins - chip;
      nums.push(num);
      let updatedRow = row.map(chip => {
        if (chip.n === num) {
          chip.visible = true;
        }
        return chip;
      });
      setState(prevState => ({ ...prevState, [whichRow]: updatedRow }));
    }

    updateArr(nums);
    updateCoins(coinsUpdate);
  };

  const renderRow = (row, whichRow) => (
    row.map((num, index) => (
      <button
        key={num.n + index}
        className={num.className}
        value={num.n}
        onMouseEnter={() => setState(prevState => ({ ...prevState, disabled: spinning }))}
        disabled={state.disabled}
        onClick={() => numsSelectionHandler(num.n, whichRow)}>
        <Chip id={num.n} active={num.visible} />
      </button>
    ))
  );

  return (
    <React.Fragment>
      <div className="d-flex flex-row align-items-start roulette-table">
        <div className="align-self-start">
          <ul className="list-unstyled pt-6">
            {state.columnLeft.map((num, index) =>
              <li key={num.n + index} className={num.className + " no-cursor"} value={num.n}>
                <OverlayTrigger overlay={<Tooltip id={`tooltip-${num.n}`}>No bets on {num.n}!</Tooltip>}>
                  <span className="d-inline-block">{num.n}</span>
                </OverlayTrigger>
              </li>
            )}
          </ul>
        </div>
        <div className="align-self-start">
          <div className="table-divider"></div>
          <ul className="d-flex list-unstyled">{renderRow(state.firstRow, 'firstRow')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.firstBorder, 'firstBorder')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.secondRow, 'secondRow')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.secondBorder, 'secondBorder')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.thirdRow, 'thirdRow')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.thirdBorder, 'thirdBorder')}</ul>
          <ul className="d-flex list-unstyled">{renderRow(state.fourthRow, 'fourthRow')}</ul>
          <div className="table-divider"></div>
          <ul className="d-flex list-unstyled">{renderRow(state.fifthRow, 'fifthRow')}</ul>
          <div className="table-divider"></div>
        </div>
        <div className="align-self-start">
          <div className="table-divider"></div>
          <ul className="list-unstyled">
            {state.columnRight.map((num, index) =>
              <li className={num.className} key={num.n + index}>
                <button className="blues" value={num.n} onMouseEnter={() => setState(prevState => ({ ...prevState, disabled: spinning }))} disabled={state.disabled} onClick={() => numsSelectionHandler(num.n, "columnRight")}>
                  <Chip id={num.n} active={num.visible} />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RouletteTable;



