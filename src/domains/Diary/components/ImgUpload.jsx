import React from "react";
import profile from "/assets/Diary/dog-default-img.svg";

function ImgUpload({ images, handleImageChange, handleDeleteImage }) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-64 gap-1 mb-3 bg-white border border-gray text-dark_gray`}
      >
        <label htmlFor="image-upload">
          <img
            src={profile}
            alt="dogProfile"
            className="w-16 h-16 cursor-pointer"
          />
        </label>
        {images.length === 0 && (
          <p className="text-pastel_blue">이미지를 선택해주세요!</p>
        )}
        <p className="mb-4">사진은 최대 3장까지 첨부할 수 있어요!</p>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png, image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
        />
        {images.length > 0 && (
          <div className="flex flex-row gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="object-cover w-24 h-24 border rounded-lg border-gray"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute flex items-center justify-center w-6 h-6 text-white rounded-full top-1 right-1 bg-pastel_blue"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ImgUpload;
