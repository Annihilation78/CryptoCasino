// balanceUtils.jsx
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './Firebase'; // Ajusta la ruta según tu estructura de archivos

// Función para actualizar el balance del usuario
export const updateBalance = async (userId, newBalance) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { balance: newBalance });
    console.log("Balance actualizado exitosamente");
  } catch (error) {
    console.error("Error al actualizar el balance: ", error);
  }
};
