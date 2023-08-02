import Title from "./components/Title";
import Example from "./components/Example";
import Garage from "./components/Logical";
function App() {
  const cars = ["Ford", "BMW", "Audi", "Buggati"];
  return (
    <>
      <Title name="TODO APP" />
      <Example isGoal={false} />
      <Garage cars={cars} />
    </>
  );
}

export default App;
