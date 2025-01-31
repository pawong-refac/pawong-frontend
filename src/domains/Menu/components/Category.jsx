import React from "react";

const Category = () => {
  return (
    <div className="w-full gap-5 flex flex-col items-center">
      <div className="w-full px-5 py-4">
        <div className="rounded-2xl w-full h-60 px-10 py-6 bg-white">
          <h1 className="text-xl text-left">활동</h1>
          <div className="w-full text-[15px] py-7 grid grid-cols-2 grid-rows-2 gap-5">
            <div className="max-w-[200px] w-full flex flex-row justify-start items-center gap-5">
              <img
                className="w-11 h-8"
                src="/assets/Notice/임시보호_상식.svg"
                alt="임시보호 상식 아이콘"
              />
              <p className="text-sm">임시보호</p>
            </div>
            <div className="max-w-[200px] w-full flex flex-row justify-start items-center gap-5">
              <img
                className="w-11 h-8"
                src="/assets/Notice/인증배지_신청.svg"
                alt="인증배지 신청 아이콘"
              />
              <p className="text-sm">인증배지 신청</p>
            </div>
            <div className="max-w-[200px] w-full flex flex-row justify-start items-center gap-5">
              <img
                className="w-11 h-8"
                src="/assets/Notice/임보동물_목록.svg"
                alt="임보동물 목록 아이콘"
              />
              <p className="text-sm">임보동물 목록</p>
            </div>
            <div className="max-w-[200px] w-full flex flex-row justify-start items-center gap-5">
              <img
                className="w-11 h-8"
                src="/assets/Notice/임보일지_작성.svg"
                alt="임보일지 작성 아이콘"
              />
              <p className="text-sm">임보일지 작성</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5">
        <div className="rounded-2xl w-full h-50 px-10 py-6 bg-white">
          <h1 className="text-xl text-left">사이트 이용</h1>
          <div className="w-full text-[15px] py-7 grid grid-cols-2">
            <p>고객센터</p>
            <p>공지사항</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
