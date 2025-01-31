import React, { useEffect, useRef, useState } from "react";
import listImg from "/assets/Diary/list-img.svg";

//TODO 스크롤 해결하기

function DiaryList() {
  const tag = ["전체", "오산완", "일상", "병원", "먹방", "미용"];
  const title = [
    "오늘 오전 산책 무사히 끝냄!😍😎",
    "오랜만에 곰돌이 재 등장 🐻",
    "날씨🌤️가 너무 좋네요!",
    "사료 추천해요",
    "예방접종💉 정보 공유❕❗️",
  ];
  const nikName = ["구름이형", "털털이", "강지", "두부엄마", "흰둥이엄마짱구"];

  const content = Array.from({ length: 50 }, () => ({
    tag: tag.filter((item) => item !== "전체")[
      Math.floor(Math.random() * tag.filter((item) => item !== "전체").length)
    ],

    date: new Date(
      new Date(2022, 0, 1).getTime() +
        Math.random() *
          (new Date(2025, 0, 20).getTime() - new Date(2022, 0, 1).getTime())
    )
      .toISOString()
      .split("T")[0],
    title: title[Math.floor(Math.random() * title.length)],
    nikName: nikName[Math.floor(Math.random() * nikName.length)],
  }));
  const [selectTag, setSelectTag] = useState("전체");
  const handleTagClick = (tag) => {
    setSelectTag(tag);
  };
  const filteredDiary =
    selectTag === "전체"
      ? content
      : content.filter((content) => content.tag === selectTag);

  const scrollRef = useRef(null);
  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollTop = window.scrollY;
      console.log("Window ScrollY:", scrollTop);

      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollTop;
        console.log("Div scrollTop:", scrollRef.current.scrollTop);
      }
    };
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <div className="w-full h-full bg-white">
      <div className="content_container">
        <div className="flex flex-row gap-2">
          {tag.map((tag, index) => (
            <button
              onClick={() => handleTagClick(tag)}
              type="button"
              className={`px-4 text-center cursor-pointer w-17  rounded-2xl hover:bg-light_blue hover:text-pastel_blue ${
                selectTag === tag
                  ? "bg-light_blue fontBold text-pastel_blue"
                  : "bg-pastel_gray text-dark_gray fontRegular"
              }`}
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
        <hr className="w-full mt-3 text-dark_gray"></hr>
        <div
          ref={scrollRef}
          style={{
            height: "650px",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {filteredDiary.length > 0 ? (
            filteredDiary.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center py-3 mx-3 border-b border-light_gray "
              >
                <div className="flex flex-col items-center justify-center w-20 gap-1 mr-2">
                  <div className="w-16 px-2 text-sm text-center rounded-2xl bg-light_blue text-pastel_blue">
                    {item.tag}
                  </div>
                  <p className="text-xs text-gray">{item.date}</p>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-sm cursor-pointer text-dark_gray ">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray">{item.nikName}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-3/4">
              <p className="text-sm text-dark_gray">
                아직 작성된 게시글이 없어요. 첫 작성자가 되어보세요!
              </p>
            </div>
          )}
        </div>
        <div className="flex my-1">
          <img src={listImg} className="w-64 ml-auto" />
        </div>
      </div>
    </div>
  );
}

export default DiaryList;
