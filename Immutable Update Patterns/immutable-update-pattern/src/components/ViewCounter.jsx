import { useState } from "react";

const ViewCounter = () => {
  const [counter, setCounter] = useState(0);
  // const [value, setValue] = useState({
  //   name: 'alvin',
  //   num: 20,
  //   isSleepy: true
  // })
  const increment = () => {
    setCounter((prev) => {
      return prev + 1
    });
    setCounter((prev) => {
      return prev + 1
    });
    setCounter((prev) => {
      return prev + 1
    });
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return(
    <div>
      <h1>Counter!</h1>
      <h2>The count is: {counter}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
 
 )
}

// ViewCounter // 1
// ViewCounter // 2


export default ViewCounter;