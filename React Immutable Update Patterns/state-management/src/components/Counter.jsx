import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({
    counter: 0,
    isClicked: false
  });
  
  const increment = () => {
    setState((prev) => {
      return {
        ...prev,
        counter: prev.counter + 1
      }
    })
  }

  const decrement = () => {
    setState((prev) => {
      return {
        ...prev,
        counter: prev.counter - 1
      }
    })
  }

  const changeMe = () => {
    setState((prev) => {
      return {
        ...prev,
        isClicked: !prev.isClicked
      }
    })
  }

  console.log(state);
  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={changeMe}>Change is Clicked</button>
    </div>
  )
};

export default Counter;

const sayHello = () => {
  let num = 0;  
  num += 1
  return num
}

sayHello()
sayHello()
sayHello()