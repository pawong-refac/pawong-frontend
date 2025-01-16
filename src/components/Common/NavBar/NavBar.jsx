import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/admin") return null;

  return (
    <div className="w-full h-12 px-14 absolute bottom-0 flex justify-between items-center bg-white">
      <p>홈</p>
      <p>임보동물</p>
      <p>임보일지</p>
      <p>메뉴</p>
    </div>
  );
};

export default NavBar;
