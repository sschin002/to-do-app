import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ArrayHook() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: passColor() };
    });
  };
  const passColor = () => {
    var color = document.getElementById("value");
    return color.value;
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model}.
      </p>
      <input type="text" id="value"></input>
      <Button variant="primary" type="button" onClick={() => updateColor()}>
        Change
      </Button>{" "}
    </>
  );
}

export default ArrayHook;
