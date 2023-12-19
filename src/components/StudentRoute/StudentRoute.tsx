import { Outlet, Navigate } from "react-router-dom";

const StudentRoute: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "null");
  if (user.role !== "student") {
    return <Navigate to={"/my-account"} />;
  }
  return <Outlet />;
};

export default StudentRoute;
