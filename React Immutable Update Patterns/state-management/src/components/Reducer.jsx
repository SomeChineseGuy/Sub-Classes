import React, { useReducer } from "react";


const Reducer = () => {
  const initialState = {
    counter: 0,
    username: "Alvin",
    userData: ["Something cool here!", "Second message", "Third Message"]
  }

  const reduce = (state, action) => {
    
    if(action.type === "increment") {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    if(action.type === "decrement") {
      return {
        ...state,
        counter: state.counter - 1
      }
    }

    if(action.type === 'update') {
      return {
        ...state,
        username: "Jon"
      }
    }

    if(action.type === 'submit') {
      return {
        ...state,
        username: "Alvin"
      }
    }

    if(action.type === 'add') {
      return {
        ...state,
        userData: [...state.userData, "Final Message"]
      }
    }

    return {
      ...state
    }
  }

  const [state, dispatch] = useReducer(reduce, initialState);

  const increment = () => {
    dispatch({type: 'increment', secretMessage: "Hey I hope you are well"})
  }
  const decrement = () => {
    dispatch({type: "decrement", username: "Kay"})
  }

  const update = () => {
    dispatch({type: "update"})
  }

  const submit = () => {
    dispatch({type: "submit"})
  }

  const add = () => {
    dispatch({type: "add"})
  }

  return (
    <div>
      <h1>Welcome to the Reducer!</h1>
      <p>The count: {state.counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={update}>Update</button>
        <button onClick={submit}>Submit</button>
        <button onClick={add}>Add</button>
      </div>
      <p>Current user: {state.username}</p>
      {state.userData.map((message, idx) => {
        return <p key={idx}>{message}</p>
      })}
    </div>
  )
};

export default Reducer;
