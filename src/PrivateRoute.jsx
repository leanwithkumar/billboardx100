import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = () => {
  const userInfo = localStorage.getItem("user-info");

  if (!userInfo) return <Navigate to="/login" replace />;

  const { token } = JSON.parse(userInfo) || {};

  if (!token) return <Navigate to="/login" replace />;

  const decoded = jwtDecode(token);
  const isExpired = decoded?.exp && decoded.exp < Date.now() / 1000;

  if (isExpired) {
    localStorage.removeItem("user-info");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // ✅ required for nested routing
};

export default PrivateRoute;
