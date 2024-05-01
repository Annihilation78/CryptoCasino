import { styled } from '@mui/material/styles';

const PlayArea = styled('div')(({ theme }) => ({
  margin: '10px 25px',
}));

const CoinArea = styled('div')(({ theme }) => ({
  height: '100px',
  padding: '10px',
  color: '#fff',
}));

const MessageArea = styled('div')(({ theme }) => ({
  margin: '10px',
}));

const Message = styled('div')(({ theme }) => ({
  fontSize: '22px',
  color: 'white',
}));

const WinOrLoseContainer = styled('div')(({ theme }) => ({
  height: '50px',
  // margin: '-50px auto 0px',
}));

const WinOrLose = styled('div')(({ theme }) => ({
  border: '1px solid black',
  backgroundColor: 'grey',
  height: '40px',
  fontSize: '1.3em',
  fontWeight: 'bold',
  color: 'white',
  lineHeight: '40px',
  opacity: 0.8,
}));
