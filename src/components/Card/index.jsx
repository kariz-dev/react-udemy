import React from "react";
import "../Card/style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} width="200px" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.job}</p>
      </div>
    </div>
  );
};

export default Card;
