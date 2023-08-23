import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
