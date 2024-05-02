import './Roulette.css';
import Context from './components/Context'
import BetBoard from './components/BetBoard'
import LastNumbers from './components/LastNumbers'
import Chips from './components/Chips'
import Balance from './components/Balance'
import Faucet from './components/FaucetModal';
import Board from './components/Board';
import Confetti from './components/Confetti'
import Navigation from '../../Navigation.jsx';
import Header from '../../Header.jsx'; 
import Footer from '../../Footer.jsx'; 

function Roulette() {
  return (
    <div className="App">
      <Header title="Roulette"/>
      <Context>

        <div>
            <Balance />
            <Faucet />
        </div>

        <div className='upper-container'>
          <Board />
          <Confetti />
        </div>

        <div className='bottom-conteiner'>
          <LastNumbers />
          <BetBoard />
          <Chips />
        </div>
      </Context>
      <Footer />
    </div>
  );
}

export default Roulette;