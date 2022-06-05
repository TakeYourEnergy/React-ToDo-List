import { ListGroup, Button } from "react-bootstrap"
import styles from './todos.module.css'

const Todos = ({ text, status, index, changeStatusHandler, id, deleteTodo }) => {
   return (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
         <span className={status ? `${styles.done}` : ''}>{index + 1}.&nbsp;{text}</span>
         <span>
            <Button onClick={() => changeStatusHandler(id)} variant="success">{status ? 'выполнена' : 'не выполнена'}</Button>{' '}
            <Button onClick={() => deleteTodo(id)} variant="danger">удалить задачу</Button>
         </span>
      </ListGroup.Item>
   )
}

export default Todos