import React from "react";

function ternary(props) {
  const isGoal = props.iGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function MissedGoal() {
  return <h1>MISSED!</h1>;
}
function MadeGoal() {
  return <h1>GOAL!</h1>;
}
export default ternary;
