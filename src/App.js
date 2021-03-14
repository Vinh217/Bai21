import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Vinh";
  const age = 18;
  const isMale = true;
  const student = {
    name: "Easy Front-end",
  };
  const colorList = ["red", "green", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>Vinh Front-end 123</p>
        <p>
          {" "}
          xin chao {name} - {age} - {isMale ? "Male" : "FeMale"}{" "}
        </p>
        {isMale ? <p>Male</p> : <p>FeMale</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>FeMale</p>}

        {isMale && (
          <div>
            <p>FeMale</p>
            <p>FeMale</p>
            <p>FeMale</p>
          </div>
        )}
        {isMale && (
          <React.Fragment>
            {/* <> */}
            <p>FeMale</p>
            <p>FeMale</p>
            <p>FeMale</p>
            {/* </> */}
          </React.Fragment>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(
            color =>(
              <li style={{color}}>{color}</li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
