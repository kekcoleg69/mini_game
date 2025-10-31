import React from "react";
import Number from "./Number";

export default function NumbersContainer({}) {
  const styles = {
    height: "700px",
    width: "700px",
    margin: "0 auto",
    display: "flex",
    gap: "100px",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={styles}>
      <Number id={1}>1</Number>
      <Number id={2}>2</Number>
      <Number id={3}>3</Number>
      <Number id={4}>4</Number>
      <Number id={5}>5</Number>
      <Number id={6}>6</Number>
      <Number id={7}>7</Number>
      <Number id={8}>8</Number>
      <Number id={9}>9</Number>
    </div>
  );
}
