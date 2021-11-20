import React from "react";
import "./App.css";
import Card from "./components/Card";
import faker from "faker";

console.log(faker);
function App() {
  const buttonMarkup = (
    <div className="d-flex justify-content-center mb-2">
      <button className="btn btn-primary mx-2 px-4">Yes</button>
      <button className="btn btn-danger mx-2 px-4">No</button>
    </div>
  );
  return (
    <div className="App d-flex justify-content-center">
      <Card
        image={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        job={faker.name.jobTitle()}
        alt={faker.name.firstName()}
      >
        {buttonMarkup}
      </Card>
      <Card
        image={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        job={faker.name.jobTitle()}
        alt={faker.name.firstName()}
      >
        {buttonMarkup}
      </Card>
      <Card
        image={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        job={faker.name.jobTitle()}
        alt={faker.name.firstName()}
      >
        {buttonMarkup}
      </Card>
    </div>
  );
}

export default App;
