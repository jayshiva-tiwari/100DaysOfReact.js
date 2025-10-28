import React from "react";

const InlineStyled: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return <div style={boxStyle}>This is an inline styled box</div>;
};

export default InlineStyled;
