import { use } from "react"
import Friend from "./Friend";
export default function User({fetchFriends}) {
  const user =use(fetchFriends);
  console.log(user);
  return(
    <div className="card">
      <h3>name: {user.length}</h3>
      {
        user.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
      }
    </div>
  )}