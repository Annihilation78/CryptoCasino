import { useContext } from "react";
import { Auth } from "./login/Auth.jsx";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(Auth);

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};



ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
