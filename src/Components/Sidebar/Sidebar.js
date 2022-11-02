import React from "react";
import SideItems from "./SideItems";

const Sidebar = ({ open }) => {
  return (
    <div
      className={` ${
        open ? "w-64" : "w-16"
      } bg-[#252b3b] h-screen fixed duration-300`}
    >
      <SideItems open={open} />
    </div>
  );
};

export default Sidebar;
