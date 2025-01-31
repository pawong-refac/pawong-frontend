import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col justify-center items-start mt-16 px-3"
    >
      <span className="fontExtraBold text-2xl mb-4">포옹</span>
      <span className="text-xs text-dark_gray">
        이용약관 | 개인정보 처리방침
      </span>
      {[
        { label: "회사명", info: "포옹" },
        { label: "주소", info: "서울특별시 용산구 한강대로 32" },
        { label: "대표이사", info: "데려오조" },
        { label: "사업자등록번호", info: "000-00-00000" },
        { label: "통신판매신고", info: "제0000-서울용산-00000호" },
        { label: "이메일", info: "cs@pawong.co.kr" },
        { label: "전화번호", info: "070-1234-5678" },
      ].map(({ label, info }, index) => {
        return (
          <div
            key={index + label}
            className="flex flex-row text-xs text-light_gray"
          >
            <span className="w-[100px]">{label}</span>
            <span>{info}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
