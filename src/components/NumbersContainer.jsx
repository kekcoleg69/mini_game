import React from "react";
import Number from "./Number";

export default function NumbersContainer({
  changeActiveButton,
  activeButton,
  score,
  setScore,
}) {
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
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={1}
      >
        1
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={2}
      >
        2
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={3}
      >
        3
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={4}
      >
        4
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={5}
      >
        5
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={6}
      >
        6
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={7}
      >
        7
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={8}
      >
        8
      </Number>
      <Number
        activeButton={activeButton}
        changeActiveButton={changeActiveButton}
        score={score}
        setScore={setScore}
        id={9}
      >
        9
      </Number>
    </div>
  );
}
