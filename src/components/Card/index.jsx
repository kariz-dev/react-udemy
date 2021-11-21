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
        <input onChange={props.onChangeInput} type="text" value={props.name} className="mt-2" />
        <button className="my-2 btn btn-success" onClick={props.onChangeName}>Change Name</button>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
