// import React, { useState } from "react";

// const UseStateExample = () => {
//   // useState SHOULD be used within the main function
//   const [inputValue, setInputValue] = useState("Dogara");

//   // Create onChange function
//   var onChangeMethod = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//   }
//   return (
//     <div>
//       <input placeholder="Enter Text ..." onChange={onChangeMethod} />
//       {inputValue}
//     </div>
//   );
// };

// export default UseStateExample;

/**
 * Step 1: Create your component
 * Step 2: Create your jsx scafolding
 * Step 3: Create/add your handler method (e.g onClick, onChnage)
 * Step 4: Create your constant followed by square brackets [] and implement State
 * Step 5: Import useState and set the State to its initial
 * Step 6: Write the method/handler to setNew State
 */

// useState 2

import React, { useState } from "react";


const useStateExample = () => {

  const [food, setFood] = useState ("Potato");
  return (
    <div>
      <h1>My best meal is: {food}</h1>
      <button type="button" onClick={() => setFood("Beans")}>Update</button>
    </div>
  )
}

export default useStateExample
