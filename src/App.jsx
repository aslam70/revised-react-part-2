import "./App.css";
import Counter from "./Counter";
import Object from "./Object"
function App() {
  function handleClick() {
    alert("clicked");
  }
  const handleClick1 = () => {
    alert("click1");
  };
  const handleAdd = (num) => {
    const newNum = num + 2;
    alert(newNum);
  };

  return (
    <>
      <section id="center">
        <button onClick={handleClick}>click me</button>
        <button onClick={handleClick1}>click 2</button>
        <button
          onClick={function handleClick3() {
            alert("clicked 3");
          }}
        >
          click 3
        </button>
        <button
          onClick={() => {
            alert("clicked 4");
          }}
        >
          click 4
        </button>
        <button
          onClick={() => {
            handleAdd(2);
          }}
        >
          Add
        </button>
        <Counter></Counter>
        <Object></Object>
      </section>
    </>
  );
}

export default App;
