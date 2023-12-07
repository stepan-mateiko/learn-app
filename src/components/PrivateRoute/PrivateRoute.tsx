import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  //   const user = useSelector((state: RootState) => state.user);

  //   if (user.role !== "admin") {
  //     return <Navigate to="/courses" />;
  //   }
  //   return <Outlet />;
  return <>Private</>;
};

export default PrivateRoute;
