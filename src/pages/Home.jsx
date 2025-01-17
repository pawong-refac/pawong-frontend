import React from "react";
import Carousel from "../components/Home/Carousel";
import Menu from "../components/Home/Menu";
import Tip from "../components/Home/Tip";
import CareListThumbNail from "../components/Home/CareListThumbNail";
import TipThumnNail from "../components/Home/TipThumnNail";

const Home = () => {
  return (
    <div className="w-full h-full caret-transparent">
      <Carousel />
      <div className="w-full p-5 gap-5 flex flex-col">
        <Menu />

        {/* 광고베너 */}
        <img
          className="w-full h-24 object-cover"
          src="/assets/Home/Advertisement.svg"
          alt="Advertisement"
        />
        <Tip />
        <CareListThumbNail />

        {/* 광고베너2 */}
        <img
          className="w-full h-40 object-cover rounded-2xl"
          src="/assets/Home/Advertisement_2.svg"
          alt="Advertisement"
        />
        <TipThumnNail />
      </div>
    </div>
  );
};

export default Home;
