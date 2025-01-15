import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const LoginAdmin = () => {
    return (
        <div className="w-full h-screen bg-white px-5 flex-col flex_center">
            <p className="pb-4">모든 동물들의 행복을 바라며</p>
            <h1 className="text-3xl fontExtraBold">포옹 관리자</h1>
            <img src="/assets/Login_img.svg" alt="로그인 메인이미지" />
            <div className="w-full flex_center pb-8">
                <div className="w-1/4 border-t border-black"></div>
                <span className="px-5">로그인</span>
                <div className="w-1/4 border-t border-black"></div>
            </div>
            <button className="rounded-full w-12 h-12 theme__pastel_blue">
                <FontAwesomeIcon icon={faPaw} />
            </button>
        </div>
    );
};

export default Login;