// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "components/Navbar"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log("Hay I am harry");
  let a = fs.readFile(".gitignore")
  a.then(e => {
    console.log(e.toString());
  })

  return (
    <div>
      <Navbar/>
      I am a componrnt
      {/* I am a component {count}
      <br />
      <button onClick={() => setCount(count + 1)}>PLUS</button> */}
    </div>
  );
}
