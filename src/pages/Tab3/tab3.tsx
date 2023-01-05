import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Tab3 = () => {
  return (
    <div className="card">
      <NavLink
        to="/tab3/messages"
        className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
      >
        DashboardMessages
      </NavLink>
      <NavLink
        to="/tab3/tasks"
        className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
      >
        DashboardTasks
      </NavLink>
      <Outlet />
    </div>
  );
};
export default Tab3;
