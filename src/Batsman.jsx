import { useState } from "react";

export default function Players() {
  const [runs, SetRuns] = useState(0);
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    SetRuns(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    SetRuns(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    SetRuns(updatedRuns);
  };
  return (
    <div className="player">
      <h3>player:Bangla Batsman</h3>
      <p>score:{runs}</p>
      {
        runs > 50 && <p>your score:50</p> 
      }
      <button onClick={handleSingle}>single</button>
      <button onClick={handleFour}>four</button>
      <button onClick={handleSix}>six</button>
    </div>
  );
}
