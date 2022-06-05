import React, { useState } from 'react';
import './App.css';
import Header from './header/header';
import Main from './main/main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [todos, setTodos] = useState([])

  const addHandler = (text) => {
    return setTodos(prev => [...prev, {
      id: Date.now().toString(36),
      text,
      complited: false
    }])
  }

  const changeStatusHandler = (id) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complited: !todo.complited
        }
      }
      return todo
    }))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className='container py-5'>
      <Header addHandler={addHandler} />
      <Main todos={todos} changeStatusHandler={changeStatusHandler} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;
