import { Outlet, Navigate } from "react-router-dom";

const AuthRoute: React.FC = () => {
  const token = localStorage.getItem("token") || "";

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default AuthRoute;
