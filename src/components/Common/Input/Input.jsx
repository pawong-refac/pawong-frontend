import React, { forwardRef } from "react";

const Input = forwardRef(
    ({
        label,
        name,
        type = "text",
        placeholder = "",
        className = "input__underline",
        accept = "",
        error,
        onChange,
        onBlur,
        multiple = false
    }, ref) => {

        return (
            <div className="w-full pb-5">
                <label htmlFor={name}>{label}</label>
                <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    accept={accept}
                    className={className}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...(type === "file" && multiple ? { multiple: true } : {})}
                />
                {error && <p className="text-pastel_blue text-sm pt-1">{error.message}</p>}
            </div>
        );
    }
);

export default Input;