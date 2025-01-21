import React, { useState } from "react";
import profile from "/assets/Diary/dog-default-img.svg";

//TODO input 컴포넌트화 하기 (image / form)
//TODO 버튼 컴포넌트 수정하기
function AddDiary() {
  const [formData, setFormData] = useState({
    tag: "",
    title: "",
    place: "",
    story: "",
  });
  const [images, setImages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert("사진은 최대 3장까지 업로드할 수 있습니다.");
      return;
    }
    const newImages = [...images, ...files];
    setImages(newImages);
  };
  const handleDeleteImage = (index) => {
    URL.revokeObjectURL(images[index]);
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!formData.tag || !formData.title || !images || !formData.story) {
      alert("필수입력란을 작성해주세요!");

      return;
    }

    if (images.length === 0) {
      alert("이미지를 등록해주세요!");
      return;
    }

    const submitForm = { ...formData, images };
    console.log(submitForm);
    setFormData({
      tag: "",
      title: "",
      place: "",
      story: "",
    });
    setImages([]);

    alert("일지가 등록되었어요!");
    setIsSubmitted(false);
  };

  return (
    <div className="bg_container">
      <div className="content_container">
        <form onSubmit={handleSubmit}>
          <div
            className={`flex flex-col items-center justify-center h-64 gap-1 mb-3 bg-white border border-gray text-dark_gray
            `}
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
          <p className="my-5 text-xl fontBold">임시보호 일지를 작성해주세요</p>
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="tag" className="mb-1">
              태그 <span className="text-pastel_blue">*</span>
            </label>
            <select
              id="tag"
              className="inputFiled"
              value={formData.tag}
              onChange={handleChange}
              name="tag"
              className={`inputFiled ${
                isSubmitted && !formData.tag ? "ring-2 bg-light_blue" : ""
              }`}
            >
              <option value="" disabled>
                선택
              </option>
              <option value="오산완">오산완</option>
              <option value="일상">일상</option>
              <option value="병원">병원</option>
              <option value="먹방">먹방</option>
              <option value="미용">미용</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="title" className="mb-1">
              제목 <span className="text-pastel_blue">*</span>
            </label>
            <input
              type="text"
              id="title"
              className={`inputFiled ${
                isSubmitted && !formData.title ? "ring-2 bg-light_blue" : ""
              }`}
              placeholder="제목"
              value={formData.title}
              onChange={handleChange}
              name="title"
            ></input>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="place" className="mb-1">
              장소
            </label>
            <input
              type="text"
              id="place"
              className="inputFiled"
              placeholder="장소"
              value={formData.place}
              onChange={handleChange}
              name="place"
            ></input>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <label htmlFor="place" className="mb-1">
              이야기 <span className="text-pastel_blue">*</span>
            </label>
            <textarea
              type="text"
              id="story"
              className={`resize-none w-full p-3 mb-4 border rounded-lg cursor-pointer h-44 border-gray placeholder-gray focus:outline-none focus:ring-1 ring-pastel_blue focus:border-pastel_blue ${
                isSubmitted && !formData.story ? "ring-2 bg-light_blue " : ""
              }`}
              placeholder="함께한 일상을 작성해주세요!"
              value={formData.story}
              onChange={handleChange}
              name="story"
            ></textarea>
          </div>
          <div className="flex justify-between px-5">
            <button className="cancelBtn">취소</button>
            <button className="submitBtn" type="submit">
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDiary;
