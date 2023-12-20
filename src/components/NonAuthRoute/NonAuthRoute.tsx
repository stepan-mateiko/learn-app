import { Outlet, Navigate } from "react-router-dom";

import RoutePaths from "../../constants/routes";

const NonAuthRoute: React.FC = () => {
  const token = localStorage.getItem("token") || "";

  if (token) {
    return <Navigate to={RoutePaths.HOME} />;
  }

  return <Outlet />;
};

export default NonAuthRoute;
