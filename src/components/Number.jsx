import React, { useState } from "react";
import { useContext } from "react";
import { ContainerContext } from "../App";

export default function Number({ id, children }) {
  const { score, activeButton, changeActiveButton, setScore } =
    useContext(ContainerContext);
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
