import { useState } from "react";
export default function ProfileFrom() {
  const [user, setUser] = useState({
    name: "Abir",
    age: 25,
  });
  const updateName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const updateAge = (e) => {
    setUser({ ...user, age: e.target.value });
  };
  return (
    <div>
      <input value={user.name} onChange={updateName} placeholder="name"></input>
      <h3>name:{user.name}</h3>
      {/* age update */}
      <input value={user.age} onChange={updateAge} />
      <h3>age:{user.age}</h3>
    </div>
  );
}
