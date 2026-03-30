export default function Todo({ todo }) {
  console.log(todo);
  return (
    <div className="card">
      <h3>title:{todo.title}</h3>
    </div>
  );
}
