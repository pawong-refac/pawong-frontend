import React, { useRef, useState } from "react";
import Input from "../../../components/Common/Input/Input";

const NewUserInfoImg = ({ register, setValue }) => {
    const uploadImgRef = useRef(null);
    const [preview, setPreview] = useState("");

    const handleClick = () => {
        if (uploadImgRef.current) {
            uploadImgRef.current.click();
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            setValue("profileImg", file);
        }
    };
    return (
        <>
            <Input
                type="file"
                name="profileImg"
                accept="image/*"
                className="hidden"
                {...register("profileImg")}
                ref={uploadImgRef}
                onChange={handleImageChange}
            />
            <div className="flex-col flex_center">
                <div
                    onClick={handleClick}
                    className="w-28 h-28 rounded-full cursor-pointer"
                >
                    {preview ? (
                        <img
                            className="object-cover rounded-full"
                            src={preview}
                            alt="프로필 이미지"
                        />
                    ) : (
                        <img
                            className="object-cover rounded-full"
                            src="/assets/UserInfo/profile_img.svg"
                            alt="프로필 이미지"
                        />
                    )}
                </div>
            </div>
            <p className="text-center text-dark_gray pt-4 pb-10">프로필을 등록해주세요</p>
        </>
    );
};

export default NewUserInfoImg;