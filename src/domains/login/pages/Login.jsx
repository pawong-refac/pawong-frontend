import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import LoginSocialBtn from "../components/LoginSocialBtn";

const Login = () => {
    return (
        <div className="w-full h-screen bg-white px-5 flex flex-col flex_center">
            <p className="pb-4">모든 동물들의 행복을 바라며</p>
            <h1 className="text-4xl fontExtraBold">포옹</h1>
            <img src="/assets/Login_img.svg" alt="로그인 메인이미지" />
            <div className="w-full flex flex-row justify-center pb-4">
                <div className="text-dark_gray text-sm pr-4 text-right">
                    <p>편하게 둘러보시고</p>
                    <p>우리 같이 포옹해요!</p>
                </div>
                <Link to="/">
                    <button className="rounded-full w-10 h-10 animate-bounce text-sm theme__light_blue shadow-md">
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                </Link>
            </div>
            <div className="w-full flex_center py-8">
                <div className="w-1/4 border-t border-black"></div>
                <span className="px-5 text-base">SNS 로그인</span>
                <div className="w-1/4 border-t border-black"></div>
            </div>
            <div className="flex flex-row gap-5">
                <LoginSocialBtn
                    to="/"
                    src="/assets/Logo_google.svg"
                    alt="구글 로고 이미지"
                    bgColor="bg-white"
                />
                <LoginSocialBtn
                    to="/"
                    src="/assets/Logo_naver.svg"
                    alt="네이버버 로고 이미지"
                    bgColor="bg-[#03C75A]"
                />
            </div>
        </div>
    );
};

export default Login;