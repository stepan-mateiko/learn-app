import { Outlet, Navigate } from "react-router-dom";

const NonAuthRoute: React.FC = () => {
  const token = localStorage.getItem("token") || "";

  if (token) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default NonAuthRoute;
