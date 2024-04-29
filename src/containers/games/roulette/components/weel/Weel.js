import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './Weel.css';
import options from '../options.json';

function Weel({ updateNum, isSpinning, arr }) {
  const [state, setState] = useState({
    spinAngleStart: Math.random() * 10 + 10,
    spinTimeTotal: Math.random() * 3 + 4 * 1000,
    startAngle: 0,
    spinTime: 0,
    arc: Math.PI / (options.length / 2),
    text: ""
  });
  const spinTimer = useRef(null);
  const baseSize = 200;
  const canvasRef = useRef(null);

  useEffect(() => {
    drawRouletteWheel();
    return () => {
      stopRotateWheel();
    };
  }, []);

  const drawRouletteWheel = () => {
    const { startAngle, arc } = state;
    const canvas = canvasRef.current;
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      const outsideRadius = baseSize - 25;
      const textRadius = baseSize - 45;
      const insideRadius = baseSize - 85;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px Helvetica, Arial';

      for (let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = options[i].color;
        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
          baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i].number;
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      // Draw arrow
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
    }
  };

  const rotate = () => {
    const { spinAngleStart, spinTime, startAngle, spinTimeTotal } = state;
    if (spinTime > 2800) {
      clearTimeout(spinTimer.current);
      stopRotateWheel();
    } else {
      const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
      setState(prevState => ({
        ...prevState,
        startAngle: startAngle + spinAngle * Math.PI / 180,
        spinTime: spinTime + 10,
      }));
      clearTimeout(spinTimer.current);
      spinTimer.current = setTimeout(rotate, 30);
    }
  };

  const stopRotateWheel = () => {
    const { startAngle, arc } = state;
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
    const text = options[index].number;
    setState(prevState => ({ ...prevState, text }));
    updateNum(text);
  };

  const easeOut = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  const handleOnClick = () => {
    setState(prevState => ({ ...prevState, spinTime: 0 }));
    isSpinning(true);
    rotate();
  };

  const renderNumber = () => (
    <h1 className="blinky-number display-4 pt-1 m-0">{state.text}</h1>
  );

  const renderBtnText = () => {
    if (state.text !== "") {
      return <div>{renderNumber()}</div>;
    } else {
      return <h6 className="blink text-uppercase m-0">Put your bets and spin the wheel!</h6>;
    }
  };

  return (
    <div className="roulette-container align-self-start">
      <canvas ref={canvasRef} width={baseSize * 2} height={baseSize * 2} className="roulette-canvas"></canvas>
      {arr.length !== 0 ?
        <Button onClick={handleOnClick} className="m-2 spin-button" size="lg" block variant="danger">
          <h5 className="blink text-uppercase m-0">Spin the wheel!</h5>
        </Button>
        :
        <Button className="m-2 spin-button text-small" size="lg" block variant="dark">
          {renderBtnText()}
        </Button>
      }
    </div>
  );
}

export default Weel;
