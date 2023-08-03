import Title from "./components/Title";
import { Container, Row, Col } from "react-bootstrap";
// import Example from "./components/Example";
// import Garage from "./components/Logical";
// import Ternary from "./components/Ternary";
// import List from "./components/List";
// import Hook from "./components/Hook";
// import ArrayHook from "./components/ArrayHook";
// import Timer from "./components/Effect";
import CustomHook from "./components/CustomHook1";
import "./style.css";

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        </Col md ={{span:6}}>
      <div className="title">
        <Title name="TODO APP" />

        <CustomHook />
    </Row>
    </Container>
    </>
  );
}

export default App;
