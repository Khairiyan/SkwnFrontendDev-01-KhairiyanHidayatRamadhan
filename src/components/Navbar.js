import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Navbar(props) {
  const [isLogin, setIslogin] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIslogin("false");
    window.location.reload();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const validasiLogin = () => {
    !props.token ? setIslogin("false") : setIslogin("true");
  };

  useEffect(() => {
    validasiLogin();
  });
  return (
    <>
      <div className="navbar bg-white shadow-lg md:px-12 md:py-6 t">
        <div className="navbar-start mr-28 ml-4 md:ml-0  md:mr-0 flex items-center ">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
            <path
              d="M5.10586 13.4471C5.10586 8.06883 5.10586 5.37971 6.3966 3.44798C6.95537 2.61172 7.67339 1.8937 8.50966 1.33493C10.4414 0.0441895 13.1305 0.0441895 18.5087 0.0441895C23.887 0.0441895 26.5761 0.0441895 28.5078 1.33493C29.3441 1.8937 30.0621 2.61172 30.6209 3.44798C31.9116 5.37971 31.9116 8.06883 31.9116 13.4471C31.9116 18.8253 31.9116 21.5144 30.6209 23.4462C30.0621 24.2824 29.3441 25.0004 28.5078 25.5592C26.5761 26.85 23.887 26.85 18.5087 26.85C13.1305 26.85 10.4414 26.85 8.50966 25.5592C7.67339 25.0004 6.95537 24.2824 6.3966 23.4462C5.10586 21.5144 5.10586 18.8253 5.10586 13.4471Z"
              fill="#553B33"
            />
            <path
              d="M0 15.3618C0 10.5479 0 8.141 1.49547 6.64552C2.99094 5.15005 5.39787 5.15005 10.2117 5.15005H16.594C21.4079 5.15005 23.8148 5.15005 25.3103 6.64552C26.8058 8.141 26.8058 10.5479 26.8058 15.3618V21.7441C26.8058 26.558 26.8058 28.9649 25.3103 30.4603C23.8148 31.9558 21.4079 31.9558 16.594 31.9558H10.2117C5.39787 31.9558 2.99094 31.9558 1.49547 30.4603C0 28.9649 0 26.558 0 21.7441V15.3618Z"
              fill="#2F241F"
            />
          </svg>
          <span className="normal-case text-xl font-bold text-[#2F241F]">Dekoor</span>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white ">
            <li>
              <a className="text-black hover:bg-[#2F241F] hover:text-white">About Us</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between text-black hover:bg-[#2F241F] hover:text-white">
                Furniture
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 text-black">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-black hover:bg-[#2F241F] hover:text-white">Partnerships</a>
            </li>
            <li>
              <a className="text-black hover:bg-[#2F241F] hover:text-white">Contact</a>
            </li>
            <li>
              {!props.token ? (
                <a onClick={handleLogin} className="hover:bg-[#2F241F] hover:text-white">
                  Login
                </a>
              ) : (
                <a className="hover:bg-[#2F241F] hover:text-white" onClick={handleLogout}>
                  Logout
                </a>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden md:flex text-black">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="hover:bg-[#E5F0B6]">About Us</a>
            </li>
            <li tabIndex={0}>
              <a className="hover:bg-[#E5F0B6]">
                Furniture
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-[#2F241F] ">
                <li>
                  <a className="text-white hover:bg-[#E5F0B6] hover:text-black">Submenu 1</a>
                </li>
                <li>
                  <a className="text-white hover:bg-[#E5F0B6] hover:text-black">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="hover:bg-[#E5F0B6]">Partnerships</a>
            </li>
            <li>
              <a className="hover:bg-[#E5F0B6]">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          {isLogin === "true" ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between hover:bg-[#2F241F] hover:text-white">Profile</a>
                </li>
                <li>
                  <a className="hover:bg-[#2F241F] hover:text-white">Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout} className="hover:bg-[#2F241F] hover:text-white">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button onClick={handleLogin} className="btn btn-primary bg-[#E5F0B6] border-none text-[#2F241F] hover:bg-[#aab674] hover:text-white">
                Login
              </button>
            </>
          )}
          <button className="group bg-[#553B33] ml-4 p-3 border-none rounded-md hidden lg:flex btn hover:bg-[#211713]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4_583)">
                <path
                  className="group-hover:fill-white"
                  d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                  fill="#E5F1B5"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_583">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
