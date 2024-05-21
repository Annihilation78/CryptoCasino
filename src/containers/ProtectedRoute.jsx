import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
     // user is not authenticated
     return <Navigate to="/login" />;
  }
})
  return children;
};

export default ProtectedRoute;

