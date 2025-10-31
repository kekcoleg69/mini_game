import { createContext, useEffect, useState } from "react";
import NumbersContainer from "./components/NumbersContainer";

export const ContainerContext = createContext();

function App() {
  const [score, setScore] = useState(0);
  const [activeButton, setActiveButton] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [result, setResult] = useState();
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("record")) || []
  );

  function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    if (activeButton === randomNumber) {
      return getRandomNumber();
    } else {
      return randomNumber;
    }
  }

  function changeActiveButton() {
    setActiveButton(getRandomNumber());
  }

  useEffect(() => {
    if (score === 10) {
      const now = Date.now();
      const seconds = ((now - startTime) / 1000).toFixed(2);
      setEndTime(now);
      setResult(seconds);
      setActiveButton();
      const updated = [...records, seconds].sort((a, b) => a - b);
      setRecords(updated);
      localStorage.setItem("record", JSON.stringify(updated));
      setScore(0);
    }
  }, [score]);
  return (
    <>
      <ul
        style={{
          position: "absolute",
          right: "400px",
          top: "200px",
          fontSize: "20px",
        }}
      >
        {records.map((record, index) => {
          return <li key={index}>{record}</li>;
        })}
      </ul>
      <ContainerContext.Provider
        value={{
          score,
          activeButton,
          changeActiveButton,
          setScore,
        }}
      >
        <NumbersContainer />

        <button
          onClick={() => {
            setStartTime(Date.now());
            changeActiveButton();
          }}
          style={{
            display: "flex",
            margin: "0 auto",
            marginTop: "50px",
            padding: "50px 200px",
            textAlign: "center",
          }}
        >
          Начать
        </button>
      </ContainerContext.Provider>
    </>
  );
}

export default App;
