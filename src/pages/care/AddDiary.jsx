import React, { useState } from "react";
import profile from "../../assets/images/dog-default-img.svg";

//TODO input 컴포넌트화 하기
function AddDiary(props) {
  const [formData, setFormData] = useState({
    tag: "",
    title: "",
    place: "",
    story: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      tag: "",
      title: "",
      place: "",
      story: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center h-64 gap-1 mb-3 bg-white border cursor-pointer border-gray text-dark_gray">
          <img src={profile} alt="dogProfile" />
          <p>사진은 최대 3장까지 첨부할 수 있어요!</p>
          <div className="flex flex-row">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p className="mb-4 fontBold">임시보호 일지를 작성해주세요</p>

        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="tag" className="mb-1">
            태그
          </label>
          <select
            id="tag"
            className="inputFiled"
            value={formData.tag}
            onChange={handleChange}
            name="tag"
          >
            <option value="default">선택</option>
            <option value="오산완">오산완</option>
            <option value="일상">일상</option>
            <option value="병원">병원</option>
            <option value="먹방">먹방</option>
            <option value="미용">미용</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="title" className="mb-1">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="inputFiled"
            placeholder="오산완 하고왔어요!"
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
            placeholder="서울숲"
            value={formData.place}
            onChange={handleChange}
            name="place"
          ></input>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <label htmlFor="place" className="mb-1">
            이야기
          </label>
          <textarea
            type="text"
            id="story"
            className="resize-none w-full p-3 mb-4 border rounded-lg cursor-pointer h-44 border-gray placeholder-gray focus:outline-none focus:ring-1 ring-pastel_blue focus:border-pastel_blue ;"
            placeholder="서울숲에서 오산완하고 기분좋은 상태에요! 엄청 좋아해서 자주 와야겠어요!!"
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
  );
}

export default AddDiary;
