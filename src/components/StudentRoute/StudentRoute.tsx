import { Outlet, Navigate } from "react-router-dom";
import RoutePaths from "../../constants/routes";

const StudentRoute: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  if (user.role !== "student") {
    return <Navigate to={RoutePaths.MY_ACCOUNT} />;
  }
  return <Outlet />;
};

export default StudentRoute;
