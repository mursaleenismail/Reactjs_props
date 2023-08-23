import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    />
  );
};

export default Input;
