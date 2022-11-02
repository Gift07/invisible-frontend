import { useState } from "react";
import Dell from "../assets/dell.jpg";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex font-poppins">
      <div className="flex-1 h-full relative">
        <div className="w-full h-full z-40 flex items-center justify-center absolute">
          <div>
            <h1 className="text-center text-white font-bold text-5xl">
              Welcome to the world of email
              <br /> marketing
            </h1>
            <p className="text-white text-xs text-center py-4 max-w-3xl">
              Pariatur anim anim laboris labore nisi esse. Culpa do id sit
              consequat elit. Dolore sint veniam nostrud in id ex laboris et.
              Sint id deserunt nisi enim culpa laboris culpa. Ut Lorem amet ea
              eiusmod Lorem velit velit ad ipsum.
            </p>
            <div className="w-full flex items-center justify-center">
              <button className="px-12 py-2 bg-blue-700 text-white rounded-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full  bg-blue-600 opacity-20 z-20 absolute" />
        <img
          src={Dell}
          alt="dell"
          className="w-full h-full object-cover absolute"
        />
      </div>
      <div className="w-[30rem] bg-blue-100 h-full">
        <div className="w-full flex flex-col items-center justify-center pt-6">
          <h1 className="text-lg font-semibold">Wolfs agency</h1>
          <h1 className="text-xl py-2 font-medium">Login</h1>
        </div>
        <form className="w-full flex flex-col items-center justify-center py-6">
          <div className="w-8/12 flex items-center rounded-lg px-4 py-2 gap-x-2 border border-gray-500 bg-blue-50 my-2">
            <div className="text-lg text-blue-800">
              <AiOutlineMail />
            </div>
            <input
              placeholder="Enter email"
              type={"email"}
              className="outline-none w-full p-2 rounded-lg text-xs bg-blue-50"
            />
          </div>

          <div className="w-8/12 flex items-center rounded-lg px-4 py-2 gap-x-2 border border-gray-500 bg-blue-50 my-2">
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="text-lg text-blue-800"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
            <input
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              className="outline-none w-full p-2 rounded-lg text-xs bg-blue-50"
            />
          </div>
          <div className="w-8/12 flex justify-end py-2 text-xs">
            <h1>Forgot password?</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="w-8/12 bg-blue-500 text-sm uppercase py-2 rounded-xl text-white hover:bg-blue-600 active:bg-blue-700 duration-300">
              sign in
            </button>
          </div>
          <div
            onClick={() => navigate("/accounts/sign-up")}
            className="py-2 cursor-pointer"
          >
            <h1 className="text-sm text-blue-600">
              Already have an account register
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
