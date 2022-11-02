import Logo from "../assets/download.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFullscreen } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Tamara from "../assets/tamara.jpg";

const Navbar = ({ handleSidebar, open, handleDropdown }) => {
  return (
    <div className="w-full flex h-16 bg-white shadow-lg fixed top-0 z-[200]">
      <div className="flex h-full w-full ">
        <div
          className={` ${
            open ? "w-64" : "w-16"
          }  bg-[#252b3b] h-full flex items-center justify-center duration-300`}
        >
          <img src={Logo} alt="logo" className="h-6" />
        </div>
        <div className="flex-[1] flex h-full px-8 items-center justify-between duration-300">
          <div className="flex items-center">
            <div
              onClick={handleSidebar}
              className="h-full flex items-center text-2xl text-[#505d69]"
            >
              <HiOutlineMenuAlt1 />
            </div>
            <div className="w-80 h-9 bg-gray-200 rounded-xl flex items-center ml-5">
              <div className="text-xl pl-2">
                <AiOutlineSearch />
              </div>
              <input
                placeholder="Search"
                className="bg-gray-200 w-72 outline-none text-xs p-2 "
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="p-2 bg-gray-200 rounded-xl text-lg">
              <BsFullscreen />
            </div>
            <div className="flex items-center gap-x-3">
              <img
                src={Tamara}
                alt="tamara"
                className="h-10 rounded-full object-cover w-10"
              />
              <div
                onClick={handleDropdown}
                className="flex items-center gap-x-1 text-sm cursor-pointer"
              >
                <h1>Admin</h1>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
