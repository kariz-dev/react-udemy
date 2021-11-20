import React from "react";
import "./App.css";
import Card from "./components/Card";
import persons from './data/persons'

function App() {
  return (
    <div className="App d-flex justify-content-center">
      { persons.map(function (d, idx) {
        return <Card name={d.name} job={d.job} image={d.image} />;
      })}
    </div>
  );
}

export default App;
