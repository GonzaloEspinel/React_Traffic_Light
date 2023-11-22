import "./App.css";
import {useState} from "react";
import { Light } from "./Light";
import {useEffect} from "react";

export function App() {

  const [activeLight, setActiveLight] = useState("red");
  const [isActive, setIsActive] = useState(false);

  useEffect(()=>{
    if (!isActive)return
    const interval = setInterval(() => {
      if (!isActive) {
        return;
      }
      switch (activeLight) {
        case "red":
          setActiveLight("Yellow");
          break;
        case "yellow":
          setActiveLight("Green");
          break;
        case "green":
          setActiveLight("Red");
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="cord"></div>
      <div className="trafficLight">
        <Light color="Red" opacity={activeLight === "Red" ? 1 : 0.5} />
        <Light color="Yellow" opacity={activeLight === "Yellow" ? 1 : 0.5} />
        <Light color="Green" opacity={activeLight === "Green" ? 1 : 0.5} />
      </div>
      <button
        style={{ margin: "auto", display: "flex", marginTop: "2rem" }}
        onClick={() => setIsActive(!isActive)}
      >
        Start/Stop
      </button>
      <h1 style={{ margin: "auto", width: "fit-content" }}>{activeLight}</h1>
    </>
  );
}
export default App;
