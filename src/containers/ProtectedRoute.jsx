import { useContext } from "react";
import { AuthContext } from "./login/Auth.jsx";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};



ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
