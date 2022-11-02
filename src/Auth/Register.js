import { useState } from "react";
import Dell from "../assets/dell.jpg";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../Features/Auth/action";
import { Bars } from "react-loader-spinner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const { isAuthenticated, auth_loading, error } = useSelector(
    (state) => state.Auth
  );
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    Email: "",
    CompanyName: "",
    Password: "",
    ConfirmPassword: "",
  });
  const handleChange = (event) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(SignUp(formdata));
  };
  const navigate = useNavigate();
  if (isAuthenticated) return <Navigate to="/" />;
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
          <h1 className="text-xl py-2 font-medium">Register Now</h1>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full flex flex-col items-center justify-center py-6"
        >
          <div className="w-8/12 flex items-center rounded-lg px-4 py-2 gap-x-2 border border-gray-500 bg-blue-50 my-2">
            <div className="text-lg text-blue-800">
              <AiOutlineMail />
            </div>
            <input
              placeholder="Enter email"
              name="Email"
              value={formdata.Email}
              required
              onChange={(e) => handleChange(e)}
              type={"email"}
              className="outline-none w-full p-2 rounded-lg text-xs bg-blue-50"
            />
          </div>
          <div className="w-8/12 flex items-center rounded-lg px-4 py-2 gap-x-2 border border-gray-500 bg-blue-50 my-2">
            <div className="text-lg text-blue-800">
              <HiOutlineUser />
            </div>
            <input
              placeholder="Enter Company name"
              name="CompanyName"
              value={formdata.CompanyName}
              required
              onChange={(e) => handleChange(e)}
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
              name="Password"
              value={formdata.Password}
              required
              onChange={(e) => handleChange(e)}
              type={showPassword ? "text" : "password"}
              className="outline-none w-full p-2 rounded-lg text-xs bg-blue-50"
            />
          </div>
          <div className="w-8/12 flex items-center rounded-lg px-4 py-2 gap-x-2 border border-gray-500 bg-blue-50 my-2">
            <div
              onClick={() => setShowPassword1(!showPassword1)}
              className="text-lg text-blue-800"
            >
              {showPassword1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </div>
            <input
              placeholder="Enter confirm password"
              name="ConfirmPassword"
              value={formdata.ConfirmPassword}
              required
              onChange={(e) => handleChange(e)}
              type={showPassword ? "text" : "password"}
              className="outline-none w-full p-2 rounded-lg text-xs bg-blue-50"
            />
          </div>
          {error && (
            <div>
              <h1 className="py-2 text-red-500 text-xs">{error}</h1>
            </div>
          )}
          <div className="w-8/12 flex justify-start text-xs gap-x-2 py-2">
            <input type={"checkbox"} />
            <h1>Always remember me</h1>
          </div>
          <div className="w-8/12 flex justify-end py-2 text-xs">
            <h1>Forgot password?</h1>
          </div>
          <div className="w-full flex items-center justify-center">
            {auth_loading ? (
              <button className="w-8/12 py-2 text-sm flex items-center justify-center bg-blue-500 rounded-xl gap-x-3">
                <Bars
                  height="16"
                  width="16"
                  color="#fff"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
                <h1 className="text-white">Loading...</h1>
              </button>
            ) : (
              <button
                type="submit"
                className="w-8/12 bg-blue-500 text-sm uppercase py-2 rounded-xl text-white hover:bg-blue-600 active:bg-blue-700 duration-300"
              >
                sign up
              </button>
            )}
          </div>
          <div
            onClick={() => navigate("/accounts/sign-in")}
            className="py-2 cursor-pointer"
          >
            <h1 className="text-sm text-blue-600">
              Already have an account Login
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
