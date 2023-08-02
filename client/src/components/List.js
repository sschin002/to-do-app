import React from "react";

function List(props) {
  return <li>I am {props.brand}</li>;
}
function Garage() {
  const cars = ["Ford", "BMW", "Audi", "Buggati"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <List brand={car} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
