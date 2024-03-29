import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";

import { RootState } from "../../store";

const NonAuthRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const token = localStorage.getItem("token");
  if (user.userName && token) {
    return <Navigate to={RoutePaths.HOME} />;
  }

  return <Outlet />;
};

export default NonAuthRoute;
