import React from "react";

const Card = ({ title, content }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "5px solid #ccc",
        borderRadius: "4px",
        textAlign: "center",
        fontSize: "1.3rem",
      }}
    >
      <h2 style={{ marginBottom: "-15px" }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
