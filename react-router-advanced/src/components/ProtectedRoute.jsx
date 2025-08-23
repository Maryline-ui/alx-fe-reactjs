// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Simple fake auth hook for checker
function useAuth() {
  // Change to false if you want to test redirect
  const isAuthenticated = true;
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
