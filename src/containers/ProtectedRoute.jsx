import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};