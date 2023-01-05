import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const DashboardMessages = () => {
  return (
    <div>
      <NavLink
        to="/tab3/messages/addmsg"
        className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
      >
        {" "}
        Add messages
      </NavLink>
      <NavLink
        to="/tab3/messages/updatemsg"
        className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
      >
        {" "}
        Update messages
      </NavLink>
      <Outlet />
    </div>
  );
};
export default DashboardMessages;
