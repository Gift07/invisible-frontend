import React, { useCallback, useState } from "react";
import { HomeComponent, Navbar, NavDropdown, Sidebar } from "../Components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { AiOutlineSetting } from "react-icons/ai";

const Controller = () => {
  const handle = useFullScreenHandle();
  const [open, setOpen] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleSidebar = () => {
    setOpen(!open);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="overflow-x-hidden min-h-screen font-poppins">
      <Navbar
        handleSidebar={handleSidebar}
        open={open}
        handleDropdown={handleDropdown}
      />
      {/* home */}
      <div className="flex pt-16 relative">
        {dropdown && <NavDropdown />}
        <Sidebar open={open} />
        <HomeComponent open={open} />
        <div className="fixed bottom-6 right-7 bg-blue-600 z-200 text-2xl text-white rounded-full animate-spin p-2">
          <AiOutlineSetting />
        </div>
      </div>
    </div>
  );
};

export default Controller;
