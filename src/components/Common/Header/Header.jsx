import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/admin")
    return null;

  return (
    <div className="max-w-[600px] w-full h-14 p-3 bg-white fixed top-0 z-50 flex justify-between items-center">
      <Link to="/">
        <p className="fontExtraBold text-2xl">포옹</p>
      </Link>
      <Link to="/login">
        <img
          src="/assets/Header/login_none.svg"
          alt="login_none"
          className="w-6 h-6"
        />
      </Link>
    </div>
  );
};

export default Header;
