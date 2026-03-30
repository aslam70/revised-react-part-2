import { use } from "react";
import Todo from "./Todo";
export default function Todos({ fetchTodos }) {
  const user = use(fetchTodos);
  console.log(user);
  return (
    <div>
      <h3>title:{user.length}</h3>
      {
        user.map((todo)=><Todo key={todo.id} todo={todo} ></Todo>)
      }
    </div>
  );
}
