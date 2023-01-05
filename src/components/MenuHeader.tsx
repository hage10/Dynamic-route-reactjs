import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "/node_modules/primeflex/primeflex.css";
import DropMenu from "./DropMenu";

export const MenuHeader = () => {
  const path = "/tab2";
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);
  return (
    <div className="card">
      <div className="flex justify-content-start align-items-center flex-wrap card-container blue-container surface-500 h-2rem">
        <NavLink
          to="/tab1"
          className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={path}
          className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
        >
          Oders
        </NavLink>
        <NavLink
          to="/tab3"
          className={(navData) => "ml-3 " + (navData.isActive ? "active" : "")}
        >
          FAQs
        </NavLink>
      </div>
    </div>
  );
};
export default MenuHeader;
