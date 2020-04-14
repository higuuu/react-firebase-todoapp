import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'reactstrap';
import TodoForm from "./component/TodoForm.js";
import TodoList from "./component/TodoList.js";
import TodosContextProvider from './context/TodosContext';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">
          To Do リスト
        </h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
