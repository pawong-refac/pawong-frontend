import React from "react";

const Category = () => {
  return (
    <div className="w-full gap-5 flex flex-col items-center">
      <div className="w-full px-5 py-4">
        <div className="rounded-2xl w-full h-60 px-10 py-6 bg-white">
          <h1 className="text-xl text-left">활동</h1>
          <div className="w-full py-7 grid grid-cols-2 grid-rows-2">
            <p>임시보호</p>
            <p>인증배지 신청</p>
            <p>임보동물 목록</p>
            <p>임보일지 작성</p>
          </div>
        </div>
      </div>
      <div className="w-full px-5">
        <div className="rounded-2xl w-full h-50 px-10 py-6 bg-white">
          <h1 className="text-xl text-left">사이트 이용</h1>
          <div className="w-full py-7 grid grid-cols-2">
            <p>고객센터</p>
            <p>공지사항</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
