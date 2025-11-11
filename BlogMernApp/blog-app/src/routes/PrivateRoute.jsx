import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  //we will make this later in the course
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
