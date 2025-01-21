import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import dummyData from "../components/dummyData.js";

function DetailDiary() {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="content_container">
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer" />
            <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
              {dummyData.tag}
            </div>
            <p className="text-xl fontBold">{dummyData.title}</p>
          </div>

          <div className="flex flex-row items-center gap-2 px-5 my-5 ">
            <img
              src={dummyData.profileImg}
              className="rounded-full w-14 h-14"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg">{dummyData.nickName}</p>
              <p className="text-base text-dark_gray">{dummyData.place}</p>
            </div>
          </div>
          <div className="flex justify-end gap-2 px-1 mb-1 text-gray">
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

          <div className="flex flex-row items-center">
            <p className="px-2 text-sm text-dark_gray">{dummyData.date}</p>
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
          <p className="my-3 fontBold">
            <span className="text-pastel_blue">다른 게시글</span>도 이어보세요
          </p>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={"https://placehold.co/175"}
                alt="Placeholder Image"
                className="rounded-lg cursor-pointer"
              />
              <div className="flex flex-row items-center gap-2 w-44">
                <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
                  #오산완
                </div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-6 h-6 text-pink-400"
                />
                922
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={"https://placehold.co/175"}
                alt="Placeholder Image"
                className="rounded-lg cursor-pointer"
              />
              <div className="flex flex-row items-center gap-2 w-44">
                <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
                  #오산완
                </div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-6 h-6 text-pink-400 "
                />
                922
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                src={"https://placehold.co/175"}
                alt="Placeholder Image"
                className="rounded-lg cursor-pointer"
              />
              <div className="flex flex-row items-center gap-2 w-44">
                <div className="px-4 py-1 text-center fontBold bg-light_blue text-pastel_blue rounded-2xl w-28">
                  #일상
                </div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-6 h-6 text-pink-400"
                />
                922
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailDiary;
