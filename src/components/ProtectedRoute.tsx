import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

interface JwtPayload {
  exp: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    } catch {
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;