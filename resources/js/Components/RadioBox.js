import React from "react";

export default function RadioBox({ name, value, valueCurrent, handleChange }) {
    const checked = valueCurrent === value;

    return (
        <input
            checked={checked}
            type="radio"
            name={name}
            value={value}
            className="border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}
