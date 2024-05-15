// Importa las funciones que necesitas de los SDKs que necesitas
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASp1N2mdEe_mYuu6FRWLlzVk5wYA53aQI",
  authDomain: "cryptocasino-5b8a3.firebaseapp.com",
  projectId: "cryptocasino-5b8a3",
  storageBucket: "cryptocasino-5b8a3.appspot.com",
  messagingSenderId: "1094051952550",
  appId: "1:1094051952550:web:787a406da3884a85f3c167",
  measurementId: "G-NGP1PE8G89"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, signOut };

