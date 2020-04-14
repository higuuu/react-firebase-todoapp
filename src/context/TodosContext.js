import React, {createContext, useState} from "react"

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
    const [todos, setTodos] = useState([])
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
      const addTodo = text => {
        const newTodos = [...todos, {text, complete:false}]
        setTodos(newTodos)
      }
    return(
        <TodosContext.Provider value={{todos,addTodo,removeTodos,completeTodos}}>
            {props.children}
        </TodosContext.Provider>
    )

}

export default TodosContextProvider