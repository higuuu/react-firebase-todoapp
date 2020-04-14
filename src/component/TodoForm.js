import React,{useState, useContext} from 'react';
import { Form, InputGroup,InputGroupAddon,Button,Input} from 'reactstrap';
import {TodosContext} from "../context/TodosContext.js";
 

function TodoForm(){
    const {addTodo} = useContext(TodosContext)
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
    e.preventDefault()
    addTodo(value)
    setValue("")
  }
  return(
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
        type="text"
        value={value}
        onChange={e=>setValue(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">追加</Button>
        </InputGroupAddon>

      </InputGroup>
    </Form>
  )
}

export default TodoForm