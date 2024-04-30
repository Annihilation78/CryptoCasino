
import './roulette.css';
import Weel from './components/weel/Weel';
import RouletteTable from './components/table/Table';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GiDiamonds } from 'react-icons/gi';

import firstRow from './components/table/rows/FirstRow.json';
import firstBorder from './components/table/rows/FirstBorder.json';
import secondRow from './components/table/rows/SecondRow.json';
import secondBorder from './components/table/rows/SecondBorder.json';
import thirdRow from './components/table/rows/ThirdRow.json';
import thirdBorder from './components/table/rows/ThirdBorder.json';
import fourthRow from './components/table/rows/FourthRow.json';
import fifthRow from './components/table/rows/FifthRow.json';
import columnLeft from './components/table/rows/ColumnLeft.json';
import columnRight from '.c/table/rows/ColumnRight.json';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GiDiamonds } from 'react-icons/gi';
import RouletteTable from './RouletteTable';
import Weel from './Weel';

function App() {
  const [num, setNum] = useState("");
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);
  const [wins, setWins] = useState(0);
  const [chip] = useState(10);
  const [coins, setCoins] = useState(100000);
  const [losses, setLosses] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [message, setMessage] = useState("Put your bets and spin the wheel!");
  const [extArr, setExtArr] = useState([]);
  const [firstRow, setFirstRow] = useState([]);
  const [firstBorder, setFirstBorder] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [secondBorder, setSecondBorder] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [thirdBorder, setThirdBorder] = useState([]);
  const [fourthRow, setFourthRow] = useState([]);
  const [fifthRow, setFifthRow] = useState([]);
  const [columnLeft, setColumnLeft] = useState([]);
  const [columnRight, setColumnRight] = useState([]);

  //declaring here all the combinations, easier this way
  const twoByOneFirst = ["3", "6", "2", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
  const twoByOneSecond = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
  const twoByOneThird = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
  const firstTwelves = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const secondTwelves = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
  const thirdTwelves = ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  const oneToEighteen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
  const nineteenToThirtySix = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
  const black = ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"];
  const red = ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'];
  const even = ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36"];
  const odd = ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33', '35'];

  useEffect(() => {
    // grab user data from database and set state with that data
  }, []);

  const isSpinning = (isspinning) => {
    setSpinning(isspinning);
  }

  const userLost = () => {
    setMessage(`No luck this time!`);
    setLosses(losses + 1);
    resetGame();
  }

  const userWin = (multi) => {
    setMessage(`You win ${multi * parseInt(chip)} coins!`);
    setWins(wins + 1);
    setCoins(coins + (multi * parseInt(chip)));
    resetGame();
  }

  const resetGame = () => {
    setArr([]);
    setSpinning(false);
    setNum("");
    // Reset other state variables as needed
  }

  const determineValidBets = (length, element, num, multiplier) => {
    let extArray = [...extArr];
    let lunghezza = element.length;
    if (lunghezza === length) {
      let filtering = element.filter(isItMyNum => isItMyNum == num);
      if (filtering == num) {
        extArray.push(num);
        setExtArr(extArray);
        userWin(multiplier);
        console.log(extArr);
      }
    }
  }

  const determineValidBetsColFive = (name, element, arrName, num, multiplier) => {
    let extArray = [...extArr];
    if (element === name) {
      let filtered = arrName.filter(item => item == num);
      if (filtered == num) {
        extArray.push(num);
        setExtArr(extArray);
        userWin(multiplier);
        console.log(extArr);
      }
    }
  }

  const updateNum = (num) => {
    setNum(num);
    setCount(count + 1);

    arr.map(item => {
      if (item === num) {
        userWin(35);
      }

      if (typeof item !== "string") {
        determineValidBets(2, item, num, 17);
        determineValidBets(3, item, num, 11);
        determineValidBets(4, item, num, 8);
        determineValidBets(6, item, num, 5);
      } else {
        determineValidBetsColFive("Even", item, even, num, 1);
        determineValidBetsColFive("Odd", item, odd, num, 1);
        determineValidBetsColFive("Black", item, black, num, 1);
        determineValidBetsColFive("Red", item, red, num, 1);
        determineValidBetsColFive("1 to 18", item, oneToEighteen, num, 1);
        determineValidBetsColFive("19 to 36", item, nineteenToThirtySix, num, 1);
        determineValidBetsColFive("3rd 12", item, thirdTwelves, num, 1);
        determineValidBetsColFive("2nd 12", item, secondTwelves, num, 1);
        determineValidBetsColFive("1st 12", item, firstTwelves, num, 1);
        determineValidBetsColFive("2:1:1", item, twoByOneFirst, num, 2);
        determineValidBetsColFive("2:1:2", item, twoByOneSecond, num, 2);
        determineValidBetsColFive("2:1:3", item, twoByOneThird, num, 2);
      }
    });

    if (extArr.length === 0) {
      userLost();
    }
  }

  const updateArr = (arr) => {
    setArr(arr);
  }

  const updateCoins = (coins) => {
    setCoins(coins);
  }

  const updateRow = (row, val) => {
    switch (row) {
      case "firstRow":
        setFirstRow(val);
        break;
      case "firstBorder":
        setFirstBorder(val);
        break;
      case "secondRow":
        setSecondRow(val);
        break;
      case "secondBorder":
        setSecondBorder(val);
        break;
      case "thirdRow":
        setThirdRow(val);
        break;
      case "thirdBorder":
        setThirdBorder(val);
        break;
      case "fourthRow":
        setFourthRow(val);
        break;
      case "fifthRow":
        setFifthRow(val);
        break;
      case "columnLeft":
        setColumnLeft(val);
        break;
      case "columnRight":
        setColumnRight(val);
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Row className="justify-items-center pt-2">
        <Image src="resources/shic_logo2.png" className="img-fluid mx-auto logo" />
        <Container fluid className="table">
          {/* Your table JSX code */}
        </Container>
        {/* Other JSX components */}
      </Row>
    </Container>
  );
}

export default App;
