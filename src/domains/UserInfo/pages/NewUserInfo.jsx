import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../../components/Common/Input/Input";
import NewUserInfoImg from "../components/NewUserInfoImg";

const NewUserInfo = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, trigger, formState: { errors }, setValue } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted.", data);
        navigate("/");
    };

    return (
        <div className="w-full animate_opacity p-5">
            <div className="w-full h-screen bg-white rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="py-8 px-16" noValidate>
                    <NewUserInfoImg register={register} setValue={setValue} />
                    <div className="w-24 h-8 btn__white_gray flex_center">기본 정보</div>
                    <div className="w-full flex flex-row pt-5">
                        <Input
                            label="닉네임"
                            type="text"
                            {...register("nickname", {
                                required: "닉네임을 입력해주세요.",
                                maxLength: {
                                    value: 8,
                                    message: "닉네임은 최대 8글자만 입력할 수 있습니다.",
                                },
                            })}
                            placeholder="닉네임을 입력해주세요"
                            error={errors.nickname}
                        />
                        <div className={`w-1/3 pb-5 flex justify-end ${errors.nickname ? "items-center" : "items-end"}`}>
                            <button
                                onClick={() => trigger("nickname")}
                                className="fontBold btn__outline w-20 h-7 px-2 text-sm"
                            >
                                중복 확인
                            </button>
                        </div>
                    </div>
                    <Input
                        label="생년월일"
                        type="date"
                        placeholder="날짜를 선택해주세요."
                        {...register("birth", {
                            required: "생년월일을 입력해주세요.",
                        })}
                        error={errors.birth}
                    />
                    <button
                        type="submit"
                        className="w-full h-11 mt-4 btn__light_blue hover:duration-150"
                    >
                        등록
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewUserInfo;