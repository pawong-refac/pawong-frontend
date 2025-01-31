import React from "react";
import LoginBar from "../components/LoginBar";
import Category from "../components/Category";

const Notice = () => {
  return (
    <div className="w-full h-screen caret-transparent flex flex-col">
      <LoginBar />
      <Category />
    </div>
  );
};

export default Notice;
