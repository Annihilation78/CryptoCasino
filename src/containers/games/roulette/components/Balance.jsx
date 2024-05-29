import { useContext, memo } from "react";
import { MyContext } from "./Context";
import { updateBalance } from './balanceUtils'; // Importa la función

const Balance = () => {
  const { balance, setFaucetModal } = useContext(MyContext);
  
  // Ejemplo de uso de updateBalance
  const handleUpdateBalance = async (newBalance) => {
    const userId = "user-id"; // Obtén el ID del usuario autenticado
    await updateBalance(userId, newBalance);
  };

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
