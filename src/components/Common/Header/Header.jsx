import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/loginAdmin") return null;

  return (
    <div className="max-w-[37.5rem] w-full h-8 p-4 bg-white flex flex-row justify-between items-center">
      <p>logo</p>
      <Link to="/login">
        <p>login</p>
      </Link>
    </div>
  );
};

export default Header;
