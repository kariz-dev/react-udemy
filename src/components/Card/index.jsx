import React from "react";
import "../Card/style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="mx-auto" src={props.image} width="250px" alt={props.alt}/>
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.job}</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
