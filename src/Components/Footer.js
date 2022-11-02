import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-white px-8 py-2">
      <div className="flex items-center text-xs italic gap-x-2">
        <AiOutlineCopyrightCircle />
        <h1>wolfs agency 2020</h1>
      </div>
    </div>
  );
};

export default Footer;
