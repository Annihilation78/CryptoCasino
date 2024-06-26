import { useContext, useEffect, memo } from "react";
import { MyContext } from "./Context";
import { AuthContext } from "../../../login/Auth.jsx";
import { getBalance } from './balanceUtils';
import { updateDoc, doc } from 'firebase/firestore';

const Balance = () => {
    const { balance, setBalance, setFaucetModal } = useContext(MyContext);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        const fetchBalance = async () => {
            if (userId) {
                const userBalance = await updateDoc(doc(db, 'users', user.uid), { balance: newBalance });
                if (userBalance !== null) {
                    setBalance(userBalance);
                }
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
