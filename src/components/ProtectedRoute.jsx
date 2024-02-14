import { Navigate, useLocation } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useProductContext();
  let location = useLocation();

  if (user === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
