import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import faker from "faker";

console.log(faker);
function App() {
  const [name, setName] = useState("");

  const buttonMarkup = (
    <div className="d-flex justify-content-center mb-2">
      <button className="btn btn-primary mx-2 px-4">Yes</button>
      <button className="btn btn-danger mx-2 px-4">No</button>
    </div>
  );

  const changeHandler = (name) => {
    setName(name);
  };

  return (
    <div className="App">
      <div className="container">
        <button
          onClick={() => changeHandler("Muhammad Rizwan")}
          className="btn btn-success"
        >
          Change Name
        </button>
        <div className="mx-auto">
          <Card
            image="https://yt3.ggpht.com/qbceFhmqhXfX7jH_q3jL1UAZ3GEsgupsbpM-ABWYcQStBjudS5V-FdJyxLVdnTSuV5pdzE-h-fY=s900-c-k-c0x00ffffff-no-rj"
            name={name}
            job={faker.name.jobTitle()}
            alt={faker.name.firstName()}
            onChangeName={() => changeHandler("Rudi habibi")}
          >
            {buttonMarkup}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
