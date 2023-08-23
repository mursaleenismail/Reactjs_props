import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "	#064AAC",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
