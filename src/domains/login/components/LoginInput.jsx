import React, { forwardRef } from "react";

const LoginInput = forwardRef(({ label, type, id, placeholder }, ref) => {
    return (
        <>
            <div className="w-full pb-5">
                <label>{label}</label>
                <input
                    type={type}
                    id={id}
                    ref={ref}
                    placeholder={placeholder}
                    className="w-full border-b pt-1 border-dark_gray cursor-pointer placeholder:text-gray focus:outline-pastel_blue"
                />
            </div>
        </>
    );
});

export default LoginInput;