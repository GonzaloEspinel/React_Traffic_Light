import "./App.css";
import {useState} from "react";
import { Light } from "./Light";
import {useEffect} from "react";

export function App() {

  const [activeLight, setActiveLight] = useState("red");

  useEffect(()=>{
    const interval = setInterval(()=>{
      switch(activeLight){
        case "red":
          setActiveLight("yellow");
          break;
          case "yellow":
            setActiveLight("green");
            break;
            case "green":
              setActiveLight("red");
      }

    },3000);

    return ()=> clearInterval(interval)

  })


  return (
    <>
      <div className="stick"/>
      <div className="trafficLight">
        <Light color="red" />
        <Light color="yellow" />
        <Light color="green" />
      </div>
      <h1 style={{width: "fit-content", margin: "auto"}}>
        {activeLight}
      </h1>
    </>
  );
}

export default App;
