import React from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/admin")
    return null;

  return (
    <div className="w-full h-12 px-14 fixed bottom-0 z-auto flex justify-between items-center bg-white text-xs">
      <div className="flex flex-col justify-center items-center gap-0.5">
        <img
          src="/assets/NavBar/Home.svg"
          alt="Home Button"
          className="w-5 h-5 object-cover"
        />
        홈
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <img
          src="/assets/NavBar/Pet.svg"
          alt="Pet Button"
          className="w-5 h-5 object-cover"
        />
        임보동물
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <img
          src="/assets/NavBar/CareList.svg"
          alt="CareList Button"
          className="w-5 h-5 object-cover"
        />
        임보일지
      </div>
      <div className="flex flex-col justify-center items-center gap-0.5">
        <img
          src="/assets/NavBar/Menu.svg"
          alt="Menu Button"
          className="w-5 h-5 object-cover"
        />
        메뉴
      </div>
    </div>
  );
};

export default NavBar;
