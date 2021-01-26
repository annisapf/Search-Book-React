import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h2 className="display-3">{props.heading}</h2>
      <p className="display-5">{props.heading2}</p>
    </div>
  );
}

export default Jumbotron;