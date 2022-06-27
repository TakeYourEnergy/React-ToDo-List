import { ListGroup, Button } from "react-bootstrap"
import styles from './todos.module.css'

import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "../redux/actions/todosActionsCreators";

const Todos = ({ text, status, index, id }) => {
   console.log(text)
   console.log(id)
   console.log(status)
   const dispatch = useDispatch()

   return (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
         <span className={status ? `${styles.done}` : `${styles.none}`}>{index + 1}.&nbsp;{text}</span>
         <span>
            <Button onClick={() => dispatch(changeStatus(id))} variant="success">{status ? 'выполнена' : 'не выполнена'}</Button>{' '}
            <Button onClick={() => dispatch(deleteTodo(id))} variant="danger">удалить задачу</Button>
         </span>
      </ListGroup.Item>
   )
}

export default Todos