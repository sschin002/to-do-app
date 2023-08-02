import React from "react";

function Example() {
  const shoot = () => {
    alert("goal");
  };
  return (
    <>
      <button onClick={shoot}>Take th shot!</button>
    </>
  );
}

export default Example;
