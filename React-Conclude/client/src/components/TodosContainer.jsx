import { useEffect, useRef, useState } from "react";
import axios from 'axios';

const TodoContainer = () => {
  const [todos, setTodos ] = useState([]);
  const [input, setInput ] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
    axios.get('http://localhost:8080/todos')
    .then(({data}) => {
      setTodos(data)
    })
  }, [])

  const handleDelete = (id) => {
    // not all api calls need to be inside of a useEffect
    axios.post(`http://localhost:8080/todos/${id}/delete`)
    .then(({data}) => {
      setTodos(data)
    })
  }

  const handleClick = (id) => {
    axios.post(`http://localhost:8080/todos/${id}/checkoff`)
    .then(({data}) => {
      setTodos(data)
    })
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/todos/add`, input)
    .then(({data}) => {
      setTodos(data)
    })
  }

  return (
    <div>
      <h1>Todo container</h1>
      {
        todos.map(({id, task, done}) => {
          return (
            <div key={id}>
              <p onClick={() => handleClick(id)}>{task} {done ? "✅" : "🟩"}</p>
              <button onClick={() => handleDelete(id)}> Delete</button>
            </div>
          )
        })
      }

      <form onSubmit={handleSubmit}>
        <label htmlFor="Add Todo">Add Todo</label>
        {/* 2 ways of tracking value */}
        {/* use a State that has an empty string */}
        {/* Second way to trackk input is the useRef hook */}
        <input type="text" value={input} onChange={handleChange} ref={inputRef} />
        <button>Add </button>
      </form>
    </div>
  )
}

export default TodoContainer;

// ForEach - For each just loops over the array
// Map - Creates a new Array 

