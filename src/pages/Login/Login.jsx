import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";
import banner from "../../assets/images/login-banner.png";
import { faEye, faEyeSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import {motion} from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPass, setHiddenPass] = useState(true);
  const [loading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleLoginGoogle = async () => {
    const googleLoginURL = `${process.env.REACT_APP_SERVER_URL}/auth/google/login`;
    window.open(googleLoginURL, "_self");
  };

  return (
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white">
        <Helmet><title>Đăng nhập | Smart Tracking System </title></Helmet>
        <div className="w-full max-w-[1200px] px-4 sm:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-12 shadow-xl rounded-[20px]">
          <div className="bg-white text-center lg:col-span-7 lg:flex lg:flex-col justify-center">
            <motion.div whileHover={{ scale: 1.5 }} className="w-fit m-4">
              <Link to="/"><FontAwesomeIcon className="w-6 h-6 text-primaryColor object-left" icon={faHome}/></Link>
            </motion.div>
            <div className="w-[70%] m-auto">
              <h1 className="text-primaryColor text-3xl font-bold pt-2 pb-3">Đăng Nhập</h1>
              <h1 className="text-base font-normal">Chào mừng đến với Smart Tracking System hệ thống quản lý bãi xe của trường đại học Duy Tân</h1>
              <div className="mt-9">
                <button
                    onClick={handleLoginGoogle}
                    className="w-full mb-3 px-4 py-3 flex justify-center gap-2 border-2 rounded-lg hover:border-blue-600 transition duration-150"
                >
                  <img
                      className="w-6 h-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                  />
                  <span>Đăng nhập với Google</span>
                </button>
                <div className="mb-3 flex items-center justify-around">
                  <div className="w-[125px] h-0.5 bg-gray-300 bg-opacity-60 rounded-[100px]"/>
                  <span className="">Hoặc</span>
                  <div className="w-[125px] h-0.5 bg-gray-300 bg-opacity-60 rounded-[100px]"/>
                </div>
              </div>
              <form action="" onSubmit={handleLogin} className="">
                <div className="relative mb-6">
                  <input type="email" id="floating_outlined_email" autoComplete="email" required className="block w-full mb-6 px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setEmail(e.target.value)} value={email}/>
                  <label htmlFor="floating_outlined_email" className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Địa Chỉ Email</label>
                </div>
                <div className="relative mb-6">
                  <input type={hiddenPass ? "password" : "text"} id="floating_outlined_password" autoComplete="password" required className="block w-full px-4 py-3 border-2 rounded-lg text-gray-900 shadow-lg bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => setPassword(e.target.value)} value={password}/>
                  <label htmlFor="floating_outlined_password" className="absolute text-base text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Mật khẩu</label>
                  {password !== "" && (hiddenPass ? (<FontAwesomeIcon onClick={() => setHiddenPass(!hiddenPass)} className="absolute top-5 right-6" icon={faEyeSlash}/>) : (<FontAwesomeIcon onClick={() => setHiddenPass(!hiddenPass)} className="absolute top-5 right-6" icon={faEye}/>))}
                </div>
                <div className="text-right mb-5">
                  <Link to="/forgot-password" className="text-primaryColor">Quên mật khẩu ?</Link>
                </div>
                <button className="bg-red-700 text-white w-full py-3 mb-3 rounded-3xl hover:bg-red-700 active:opacity-80">
                  {loading ? (<div className="flex items-center justify-center"><Spinner className="h-6 w-6 mr-4"/> <span>Đang tải....</span></div>) : (<span>Đăng Nhập</span>)}
                </button>
              </form>
              <div className="text-right mb-10">
                <p>Bạn chưa có tài khoản?<Link to="/register" className="text-primaryColor text-red-600 font-bold"> Đăng ký</Link></p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block h-auto col-span-5 ">
            <img className="object-cover object-center w-auto h-full lg:rounded-r-[20px]" src={banner} alt="img"/>
          </div>
        </div>
      </div>
  );
};

export default Login;
