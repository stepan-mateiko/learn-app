import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import RoutePaths from "../../constants/routes";

import { RootState } from "../../store";

const StudentRoute: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  if (user.role !== "student") {
    return <Navigate to={RoutePaths.MY_ACCOUNT} />;
  }
  return <Outlet />;
};

export default StudentRoute;
