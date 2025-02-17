import React, { useState } from "react";
import ImgUpload from "../components/ImgUpload";

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

  const handleCancel = () => {
    setFormData({
      tag: "",
      title: "",
      place: "",
      story: "",
    });
    setImages([]);
  };

  return (
    <div className="bg_container">
      <div className="content_container rounded-2xl">
        <form onSubmit={handleSubmit}>
          <ImgUpload
            images={images}
            handleImageChange={handleImageChange}
            handleDeleteImage={handleDeleteImage}
          />
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
            <button className="cancelBtn" type="button" onClick={handleCancel}>
              취소
            </button>
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
