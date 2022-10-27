// import React, { useState, useEffect } from 'react';

// useEffect is a hook that allows us to add side effects to React Apps

/** When to use useEffect:
 * 1.Fetching data from APIs using Axios
 * 2. For timers/counters
 * 3. Updating the DOM directly
 * 
 */

// A counter to track how many times our component gets rendered/re-rendered

// const UseEffectExample = () => {

//     const [count, setCount] = useState(0);

//     // useEffect hook to increment count based on render
//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count +1 );
//         }, 5)
//     });

//   return (
//     <div>I rendered {count} times</div>
//   )
// }

// export default UseEffectExample

import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectExample() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data);
      console.log("The API was called.");
    });

  }, []);
  return (
    <div>
      Hello
      <h1></h1>
      <h1></h1>
      <button></button>
    </div>
  );
}

export default UseEffectExample;
