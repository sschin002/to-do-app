import Title from "./components/Title";
import Example from "./components/Example";
import Garage from "./components/Logical";
import Ternary from "./components/Ternary";
import List from "./components/List";
import Hook from "./components/Hook";
function App() {
  const cars = ["Ford", "BMW", "Audi", "Buggati"];

  return (
    <>
      <Title name="TODO APP" />
      <Example isGoal={false} />
      <Garage cars={cars} />
      <Ternary isGoal={true} />
      <List cars={cars} />
      <Hook />
    </>
  );
}

export default App;
