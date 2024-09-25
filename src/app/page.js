"use client";
import { useState } from "react";

export default function Home(){
  const [score, setScore] = useState(1);

  // deconstructing Arrays:
  // 1.var names used fir the items don't matter
  // 2.the order does matter

  console.log(score)

  function addToScore() {
    // You can set a new value to the setter function 
    // setScore(score + 1);
    setScore(function (value) {
      return value + 1;
    });
   }
    function doublePoints() {
    addToScore();
    addToScore();
    }

    


  return(
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <button onClick={doublePoints}>Add 2</button>
      <p>Score: {score} </p>
      </div>
      
    </main>
  )
}