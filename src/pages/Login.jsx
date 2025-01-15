import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <div className="w-full h-screen bg-white px-5 flex-col flex_center">
            <p className="pb-4">모든 동물들의 행복을 바라며</p>
            <h1 className="text-3xl fontExtraBold">포옹</h1>
            <img src="/assets/Login_img.svg" alt="로그인 메인이미지" />
            <div className="flex_center flex-row">
                <p className="text-dark_gray pr-3">편하게 둘러보세요</p>
                <Link to="/">
                    <button className="rounded-full w-10 h-10 text-sm theme__light_blue">
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                </Link>
            </div>
            <div className="w-full flex_center py-8">
                <div className="w-1/4 border-t border-black"></div>
                <span className="px-5">SNS 로그인</span>
                <div className="w-1/4 border-t border-black"></div>
            </div>
        </div>
    );
};

export default Login;