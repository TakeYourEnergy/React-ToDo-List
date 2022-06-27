import { ListGroup } from "react-bootstrap"
import Todos from "../todos/todos"

import { useSelector } from "react-redux";

const TodosList = () => {
   const todos = useSelector(state => state.todos)

   return (
      <ListGroup>
         {todos.length
            ? todos.map((todo, index) => <Todos key={index} id={todo.id} text={todo.text} status={todo.complited} index={index} />)
            : <p>Список задач пуст</p>}
      </ListGroup>
   )
}


export default TodosList