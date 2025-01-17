import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginInput from "./LoginInput";

const LoginModal = ({ onClose }) => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwdRef = useRef();

    const handleBackDropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleSubmit = () => {
        const formData = {
            email: emailRef.current.value,
            password: passwdRef.current.value,
        };
        alert(JSON.stringify(formData));
        navigate("/");
    };

    return (
        <>
            <div className="animate_opacity max-w-[37.5rem] w-full h-screen fixed top-0 flex_center">
                <div
                    className="w-full h-screen bg-zinc-950 bg-opacity-30 backdrop-blur-sm absolute"
                    onClick={handleBackDropClick}
                ></div>
                <div className="w-2/3 p-5 bg-white rounded-md shadow-md absolute z-10">
                    <button onClick={onClose}>&times;</button>
                    <p className="fontExtraBold text-center text-2xl">관리자 로그인</p>
                    <form onSubmit={handleSubmit} className="w-full py-8 px-8">
                        <LoginInput
                            label="🐶 아이디"
                            type="email"
                            id="email"
                            ref={emailRef}
                            placeholder="이메일을 입력해주세요"
                        />
                        <LoginInput
                            label="⭐ 패스워드"
                            type="password"
                            id="passwd"
                            ref={passwdRef}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        <button
                            type="submit"
                            className="w-full h-11 mt-3 btn__pastel_blue hover:duration-150"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginModal;