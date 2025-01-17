import React from "react";

const CareListThumbNail = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 px-10 py-7 bg-white rounded-2xl fontBold">
      <p className="w-full text-left text-xl">
        와글와글 <span className="text-pastel_blue">임보일지</span>
      </p>
      <div className="flex flex-col items-start w-full fontBold text-xs">
        {[
          { tag: "일상", title: "날씨가 좋네요" },
          { tag: "모임", title: "강아지숲에서 대형견 모임을 진행했어요" },
          { tag: "오산완", title: "오늘 오전 산책 무사히 끝냄~!" },
          { tag: "먹방", title: "사료를 바꿨더니 몸무게가 1kg나 쪘어요..." },
          { tag: "미용", title: "오랜만에 곰돌이 재등장" },
        ].map(({ tag, title }, index) => {
          return (
            <div
              key={tag + index}
              className="flex flex-row justify-start items-center w-full py-2.5 gap-3 border-b border-light_gary"
            >
              <div className="flex flex-col justify-center items-center w-16 py-1.5 rounded-xl  bg-light_blue text-pastel_blue">
                {tag}
              </div>
              <div className="text-dark_gray">{title}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center w-28 h-5 fontRegular bg-pastel_gray text-pastel_blue text-xs">
        임보일지 모아보기
      </div>
    </div>
  );
};

export default CareListThumbNail;
