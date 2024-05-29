import { useContext, useEffect, useState, memo } from "react";
import { MyContext } from "./Context";
import { getBalance } from './balanceUtils'; // Importa la función

const Balance = () => {
  const { balance, setBalance, setFaucetModal } = useContext(MyContext);
  const userId = "user-id"; // Debes obtener el ID del usuario autenticado

  useEffect(() => {
    const fetchBalance = async () => {
      const userBalance = await getBalance(userId);
      if (userBalance !== null) {
        setBalance(userBalance);
      }
    };

    fetchBalance();
  }, [userId, setBalance]);

  return (
    <div className="balance">
      <div className="icon-balance">
        <i className="fa-sharp fa-solid fa-coins"></i> 
        <span>{balance}</span>
      </div>
      <div className="add-balance" onClick={() => setFaucetModal(true)}>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}

export default memo(Balance);
