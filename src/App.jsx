import { useEffect, useState } from 'react';
import './App.css'
import { Light } from './Light'

export default function App() {

  const [activeLight, setActiveLight] = useState("red")

  useEffect(() => {
    const intervalo = setInterval(() => {
      switch (activeLight) {
        case "red":
          setActiveLight("yellow");
      }
    }, 3000);

    return () => clearInterval(intervalo)
  })

  return (
    <>
      <div className="rope">

      </div>
      <div className="trafficLight">
        <Light color="red" opacity={activeLight === "red" ? 1 :0.4} />
        <Light color="yellow" opacity= {activeLight === "yellow" ? 1 :0.4} />
        <Light color="green" opacity= {activeLight === "green" ? 1 :0.4} />
      </div>
      <h1 style={{ margin: "auto", width: "fit-content" }}>{activeLight}</h1>
    </>
  );
}


