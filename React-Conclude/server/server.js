// Server API
const PORT = 8080;
const app = require('express')();   // npm i express
const express = require('express');
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json())


let data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
];

app.get("/todos", (req, res) => {
    res.json(data);
})

app.post("/todos/:id/checkoff", (req, res) => {
    const id = req.params.id
    const newArr = data.map((todo) => {
    if(todo.id === id) {
        return {
            ...todo,
            done: !todo.done
        }
    }
        return todo
    })
    data = newArr
    res.send(data)
})

// :id === anything || another way to think about it, is its a catch all
app.post("/todos/:id/delete", (req, res) => {
    const id = req.params.id
    const newArr = data.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      }
    })
    data = newArr;
    res.send(data)
})

app.post('/todos/add', (req, res) => {
    let value = Object.keys(req.body)[0]
    let newArr = [...data, {
      done: false,
      id: uniqid(),
      task: value
    }]
    
    data = newArr
    res.send(data)
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));