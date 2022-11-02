import React from "react";
import { Outlet } from "react-router-dom";

const HomeComponent = ({ open }) => {
  return (
    <div
      className={` ${
        open ? "pl-64" : "pl-16"
      } flex-1 pl-64 min-h-screen bg-blue-100 duration-300`}
    >
      <Outlet />
    </div>
  );
};

export default HomeComponent;
