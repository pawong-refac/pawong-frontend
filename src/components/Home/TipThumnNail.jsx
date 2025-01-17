import React from "react";

const TipThumnNail = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 px-10 py-7 bg-white rounded-2xl fontBold">
      <p className="w-full text-left text-xl">
        포옹 <span className="text-pastel_blue">소식</span>
      </p>
      <div className="flex flex-col items-start w-full fontBold text-xs">
        {["자주 묻는 질문", "포옹 서비스 점검 안내", "포옹 배송 안내"].map(
          (title, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-start items-center w-full py-2.5 gap-3 border-b border-light_gary"
              >
                <div className="flex flex-col justify-center items-center w-5 h-5 rounded-md  bg-light_blue text-pastel_blue">
                  {index + 1}
                </div>
                <div className="text-dark_gray">{title}</div>
              </div>
            );
          }
        )}
      </div>
      <div className="flex flex-col justify-center items-center w-28 h-5 fontRegular bg-pastel_gray text-pastel_blue text-xs">
        포옹 소식 모아보기
      </div>
    </div>
  );
};

export default TipThumnNail;
