import React from "react";

const LoginBar = () => {
  return (
    <div className="w-full h-20 p-7 bg-white flex flex-row justify-between items-center">
      <div className="w-auto h-14 gap-5 flex flex-row items-center">
        <div className="w-14 h-14 object-cover rounded-full bg-pastel_gray" />
        <p className="text-xl">
          포옹에 <span className="text-pastel_blue">로그인</span> 해주세요
        </p>
      </div>
      <p>{">"}</p>
    </div>
  );
};

export default LoginBar;
