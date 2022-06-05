import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const FormReact = ({ addHandler }) => {

   const [input, setInput] = useState('')

   const inputHandler = (e) => {
      setInput(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      if (input.trim()) {
         addHandler(input.trim())
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
               Submit
            </Button>
         </Form>
      </>
   )
}

export default FormReact