import React from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavDropdown = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/accounts/sign-up");
  };
  return (
    <div className="bg-white w-32 pb-3 shadow-lg z-[200] absolute right-6 px-2">
      <div className="flex items-center gap-x-2 py-2 text-sm">
        <BsPerson />
        <h1>Account</h1>
      </div>
      <div className="flex items-center gap-x-2 py-2 text-sm">
        <BsPerson />
        <h1>Account</h1>
      </div>
      <div
        onClick={handleClick}
        className="flex items-center gap-x-2 text-sm text-red-500 cursor-pointer"
      >
        <AiOutlinePoweroff />
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default NavDropdown;
