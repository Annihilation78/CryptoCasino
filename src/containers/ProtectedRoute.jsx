import { Navigate } from "react-router-dom";
import {Auth} from "./login/Auth";

export const ProtectedRoute = ({ children }) => {
  const { user } = Auth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};