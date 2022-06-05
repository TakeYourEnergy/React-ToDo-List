import { ListGroup } from "react-bootstrap"
import Todos from "../todos/todos"

const TodosList = ({ todos, changeStatusHandler, deleteTodo }) => {
   return (
      <ListGroup>
         {todos.length
            ? todos.map((todo, index) => <Todos deleteTodo={deleteTodo} key={todo.id} id={todo.id} text={todo.text} status={todo.complited} index={index} changeStatusHandler={changeStatusHandler} />)
            : <p>Список задач пуст</p>}
      </ListGroup>
   )
}


export default TodosList