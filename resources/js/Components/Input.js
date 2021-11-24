import React, { useEffect, useRef } from "react";

const InputBase = (props) => {};

export default function Input({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    step,
    placeholder,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            {type !== "textarea" ? (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    step={step}
                    ref={input}
                    className={`border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ${className}`}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => handleChange(e)}
                />
            ) : (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    ref={input}
                    className={`border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ${className}`}
                    placeholder={placeholder}
                    required={required}
                    onChange={(e) => handleChange(e)}
                />
            )}
        </div>
    );
}
