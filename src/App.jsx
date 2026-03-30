import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Object from "./Object";
import User from "./User";
import { Suspense } from "react";
import Friends from "./Friends";
import Todos from "./Todos";

const fetchData = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos").then(
  (res) => res.json(),
);
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
        <Suspense>
          <Todos fetchTodos={fetchTodos}></Todos>
        </Suspense>
        <Suspense>
          <Friends fetchFriends={fetchFriends}></Friends>
        </Suspense>
        <Suspense fallback={<h3>Loading...</h3>}>
          <User aslam={fetchData}></User>
        </Suspense>
        <Batsman></Batsman>
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
