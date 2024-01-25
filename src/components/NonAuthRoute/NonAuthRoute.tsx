import { Outlet, Navigate } from "react-router-dom";

import RoutePaths from "../../constants/routes";

const NonAuthRoute: React.FC = () => {
  const user = localStorage.getItem("user") || "";
  if (user) {
    return <Navigate to={RoutePaths.HOME} />;
  }

  return <Outlet />;
};

export default NonAuthRoute;
