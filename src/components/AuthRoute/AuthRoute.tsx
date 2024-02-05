import { Outlet, Navigate } from "react-router-dom";

import RoutePaths from "../../constants/routes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AuthRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.userName) {
    return <Navigate to={RoutePaths.HOME} />;
  }

  return <Outlet />;
};

export default AuthRoute;
