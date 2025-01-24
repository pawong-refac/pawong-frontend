import React from "react";

const Menu = () => {
  return (
    <div className="w-full flex flex-row justify-between rounded-2xl bg-white px-8 py-4 fontRegular">
      <div className="w-28 flex flex-col justify-center items-center">
        <img
          className="w-20 h-20 object-cover"
          src="/assets/Home/Menu/PetList.svg"
          alt="PetList"
        />
        <p>임보동물 목록</p>
      </div>
      <div className="w-28 flex flex-col justify-center items-center">
        <img
          className="w-20 h-20 object-cover"
          src="/assets/Home/Menu/Write.svg"
          alt="Write"
        />
        <p>임보일지 작성</p>
      </div>
      <div className="w-28 flex flex-col justify-center items-center">
        <img
          className="w-20 h-20 object-cover"
          src="/assets/Home/Menu/Favorites.svg"
          alt="Favorites"
        />
        <p>즐겨찾기</p>
      </div>
      <div className="w-28 flex flex-col justify-center items-center">
        <img
          className="w-20 h-20 object-cover"
          src="/assets/Home/Menu/Notice.svg"
          alt="Notice"
        />
        <p>공지사항</p>
      </div>
    </div>
  );
};

export default Menu;
