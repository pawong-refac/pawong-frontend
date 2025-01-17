import React from "react";

const Header = () => {
  return (
    <div className="w-full h-14 p-3 bg-white flex flex-row justify-between items-center">
      <p className="fontExtraBold text-2xl">포옹</p>
      <img
        src="/assets/Header/login_none.svg"
        alt="login_none"
        className="w-6 h-6"
      />
    </div>
  );
};

export default Header;
