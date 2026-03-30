import { use } from "react";

export default function User({ aslam }) {
  const user=use(aslam);
  console.log(user);
  return (
    <div>
      <h3>User:{user.length}</h3>
    </div>
  );
}