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

function Roulette() {
  return (
    <div className="App">
        <header>
        <h1>
        <img src="https://github.com/Annihilation78/CryptoCasino/raw/main/src/assets/Logo.png" alt="Logo"/>
          Roulette
        </h1>
        <Navigation />
      </header>
      <div className='main'>
      <Context>
            <Balance />
            <Faucet />

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
      </div>
      <footer> 
          <p>© 2024 Casino. Todos los derechos reservados.</p>
          <p>
            <a href="https://jigsaw.w3.org/css-validator/check/referer">
              <img style={{ border: '0', width: '88px', height: '31px' }}
                src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                alt="¡CSS Válido!" />
            </a>
          </p>
        </footer>
    </div>
  );
}

export default Roulette;