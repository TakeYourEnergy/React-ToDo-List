import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosActionsCreators";


const FormReact = () => {
   const dispatch = useDispatch()

   const [input, setInput] = useState('')

   const inputHandler = (e) => {
      setInput(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      if (input.trim()) {
         dispatch(addTodo(input.trim()))
         setInput('')
      }
   }

   return (
      <>
         <Form onSubmit={submitHandler} className="d-flex align-items-center justify-content-center">
            <Form.Group controlId="formBasicEmail">
               <Form.Control onChange={inputHandler} value={input} type="text" placeholder="Text here..." />
            </Form.Group>
            <Button variant="primary" type="submit" className='mx-3'>
               Новая задача
            </Button>
         </Form>
      </>
   )
}

export default FormReact