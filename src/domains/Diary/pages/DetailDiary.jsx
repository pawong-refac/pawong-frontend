import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import dummyData from "../components/dummyData.js";
import { useNavigate } from "react-router-dom";

//TODO 이미지 여려장 표시 수정
//TODO 댓글 구현

function DetailDiary() {
  const navigate = useNavigate();
  const handlegoBackClick = () => {
    navigate(-1);
  };

  const otherPost = Array.from({ length: 3 }, () => ({
    tag: ["오산완", "일상", "병원", "먹방", "미용"][
      Math.floor(Math.random() * 5)
    ],
    likes: Math.floor(Math.random() * (500 - 10 + 1)) + 10,
    title: [
      "근처공원에 산책 다녀왔어요!",
      "강아지 물품 나눔해요!",
      "올만에 미용!! 묭실 추천합니다!!!",
      "강아지 페스티벌 정보 공유해요",
      "사료 추천받아요!! 강아지 고양이도 좋아요",
      "미세먼지 때문에 짤븐 산책",
      "집에서 어떻게 놀아줘야하나요",
      "모카가 자꾸 쌩 시금치를 물고 뜯네요",
    ][Math.floor(Math.random() * 8)],
  }));

  return (
    <>
      <div className="w-full h-full bg-ligh-gray ">
        <div className="content_container">
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="h-5 cursor-pointer"
              onClick={handlegoBackClick}
            />
            <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
              {dummyData.tag}
            </div>
            <p className="text-xl fontBold">{dummyData.title}</p>
          </div>

          <div className="flex flex-row items-center gap-2 px-5 mt-5 ">
            <img
              src={dummyData.profileImg}
              className="rounded-full w-14 h-14"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg">{dummyData.nickName}</p>
              <p className="text-base text-dark_gray">{dummyData.place}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2 px-2 mb-1 text-gray">
            <button
              className=" cursor-pointe hover:text-pastel_blue"
              type="button"
            >
              편집
            </button>
            <button
              className="cursor-pointer hover:text-pastel_blue"
              type="button"
            >
              삭제
            </button>
          </div>
          <div className="flex items-center justify-center">
            <img src={"https://placehold.co/550x430"} alt="Placeholder Image" />
          </div>
          <p className="px-2 my-4">{dummyData.story}</p>

          <div className="flex flex-row items-center px-2">
            <p className="text-sm text-dark_gray">{dummyData.date}</p>
            <div className="flex items-center gap-2 ml-auto">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-6 h-6 text-pink-400 cursor-pointer"
              />
              123
              <FontAwesomeIcon
                icon={faMessage}
                className="w-5 h-5 cursor-pointer text-dark_gray"
              />
              27
            </div>
          </div>
        </div>
        <div className="content_container">
          <p className="my-5 fontBold">
            <span className="text-pastel_blue">다른 게시글</span>도 이어보세요
          </p>
          <div className="flex flex-row justify-between">
            {otherPost.map((post, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 h-72"
              >
                <img
                  src={"https://placehold.co/175"}
                  alt="Placeholder Image"
                  className="rounded-lg cursor-pointer"
                />
                <div className="flex flex-row items-center gap-2 w-44">
                  <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
                    #{post.tag}
                  </div>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-5 h-5 text-pink-400"
                  />
                  {post.likes}
                </div>
                <p className="w-40 overflow-hidden cursor-pointer h-14 text-dark_gray text-ellipsis">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDiary;
