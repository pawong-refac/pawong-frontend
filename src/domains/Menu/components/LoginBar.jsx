import React from "react";

const LoginBar = () => {
  return (
    <div className="w-full h-20 p-7 bg-white flex flex-row justify-between items-center">
      <div className="w-auto h-14 gap-5 flex flex-row items-center">
        <div className="w-14 h-14 object-cover rounded-full bg-gray-100"></div>
        <p>포옹에 로그인 해주세요</p>
      </div>
      <p>{">"}</p>
    </div>
  );
};

export default LoginBar;
