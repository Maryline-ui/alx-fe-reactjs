// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = false; // change to true to simulate login

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
