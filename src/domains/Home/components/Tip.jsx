import React from "react";

const Tip = () => {
  return (
    <div className="w-full gap-5 px-8 py-6 flex flex-col justify-center items-center rounded-2xl bg-white fontBold">
      <p className="w-full text-left text-xl">
        임보생활에 도움이 되는 포옹{" "}
        <span className="text-pastel_blue">조언</span>
      </p>
      <div className="flex flex-col justify-center items-center w-full px-10 py-5 rounded-lg text-dark_gray bg-light_blue">
        <p className="w-full text-left">시작</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full px-10 py-5 rounded-lg text-dark_gray bg-light_blue">
        <p className="w-full text-left">진행</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full px-10 py-5 rounded-lg text-dark_gray bg-light_blue">
        <p className="w-full text-left">종료</p>
      </div>
    </div>
  );
};

export default Tip;
