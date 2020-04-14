import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'reactstrap';
import TodoForm from "./component/TodoForm.js";
import TodoList from "./component/TodoList.js";

function App() {
  const completeTodos = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(todos)
  }
  const removeTodos = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, {text, complete:false}]
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">
          To Do リスト
        </h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} completeTodos={completeTodos} removeTodos={removeTodos}/>
      </Container>
    </div>
  );
}

export default App;
