import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Common/Input/Input";
import { useForm } from "react-hook-form";

const LoginAdminModal = ({ onClose }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const handleBackDropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const onLoginSubmit = (data) => {
        console.log("Form submitted.", data)
        navigate("/")
    }

    return (
        <>
            <div className="max-w-[37.5rem] w-full h-screen fixed top-0 flex_center animate_opacity">
                <div
                    className="w-full h-screen bg-black bg-opacity-50 absolute"
                    onClick={handleBackDropClick}
                ></div>
                <div className="w-2/3 p-5 bg-white rounded-2xl shadow-md absolute z-10">
                    <button className="w-full flex justify-end pr-5 pb-2" onClick={onClose}>&times;</button>
                    <p className="fontExtraBold text-center text-2xl">관리자 로그인</p>
                    <form onSubmit={handleSubmit(onLoginSubmit)} className="w-full py-8 px-8" noValidate>
                        <Input
                            label="🐶 이메일"
                            type="email"
                            placeholder="이메일"
                            {...register("email", {
                                required: "이메일을 입력해주세요.",
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "유효하지 않은 이메일 양식입니다.",
                                },
                            })}
                            error={errors.email}
                        />
                        <Input
                            label="⭐ 비밀번호"
                            type="password"
                            placeholder="비밀번호"
                            {...register("passwd", {
                                required: "비밀번호를 입력해주세요.",
                            })}
                            error={errors.passwd}
                        />
                        <button
                            type="submit"
                            className="w-full h-11 mt-5 btn__pastel_blue hover:duration-150 focus:outline-none"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginAdminModal;