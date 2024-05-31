import { doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { db } from "../../../Firebase.jsx";

export const updateBalance = async (userId, newBalance) => {
    try {
        const userDocRef = doc(db, 'users', userId);
        await updateDoc(userDocRef, { balance: newBalance });
        console.log("Balance actualizado exitosamente");
    } catch (error) {
        console.error("Error al actualizar el balance: ", error);
    }
};

export const getBalance = async (userId) => {
    try {
        const userDoc = await getDoc(doc(db, 'users', user.uid), { balance: newBalance });
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const balance = newBalance;
            return balance;
        } else {
            console.error("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el balance: ", error);
        return null;
    }
};