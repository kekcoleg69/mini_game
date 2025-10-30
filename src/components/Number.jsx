import React, { useState } from "react";

export default function Number({
  activeButton,
  changeActiveButton,
  id,
  score,
  setScore,
  children,
}) {
  return (
    <button
      style={{
        padding: "50px 50px",
        display: "block",
        fontSize: "30px",
        backgroundColor: id === activeButton ? "red" : "green",
        cursor: "pointer",
      }}
      onClick={() => {
        if (id === activeButton) {
          changeActiveButton();
          setScore(score + 1);
        }
      }}
    >
      {children}
    </button>
  );
}
