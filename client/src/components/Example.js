function Example() {
  const shoot = (a) => {
    alert(a);
  };
  return (
    <>
      <button onClick={() => shoot("goal")}>Take the shot!</button>
    </>
  );
}

export default Example;
