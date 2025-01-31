import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/loginAdmin") return null;

  return (
    <div className="max-w-[37.5rem] w-full h-12 px-14 fixed bottom-0 flex justify-between items-center bg-white">
      <p>홈</p>
      <p>임보동물</p>
      <p>임보일지</p>
      <p>메뉴</p>
    </div>
  );
};

export default NavBar;
