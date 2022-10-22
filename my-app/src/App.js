import React from "react";
import { useState } from "react";
import iconBurger from "./compMenu/burger.svg"
import logoReact from "./compMenu/logo.svg"
import './compInputs/compInput.css';
import Menu from "./compMenu/Menu";
import Main from "./compInputs/Main";
import About from "./compInputs/About";


export const Contextvalue = React.createContext(null)

export default function App() {
  const [name, setName] = useState(null);
  const [surname, setsurName] = useState(null);
  const [age, setAge] = useState(null);
  const [date, setDate] = useState(null);


  let obj = {
    name,
    setName,
    surname,
    setsurName,
    age,
    setAge,
    date,
    setDate
  };

  return (
    <div className="App">
      {/* <Menu icon={iconBurger} logo={logoReact} /> */}
      <Contextvalue.Provider value={obj}>
        <Main />
        <About />
      </Contextvalue.Provider>
    </div>
  )
}


