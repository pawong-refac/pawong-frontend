import React from "react";
import { Link } from "react-router-dom";

const LoginSocialBtn = ({ to, src, alt, bgColor }) => {
    return (
        <Link to={to}>
            <button className={`flex_center rounded-full hover:shadow-lg hover:duration-150 w-12 h-12 text-sm shadow-md ${bgColor}`}>
                <img className="w-5 h-5" src={src} alt={alt} />
            </button>
        </Link>
    );
};

export default LoginSocialBtn;