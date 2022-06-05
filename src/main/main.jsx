import styles from './main.module.css'
import TodosList from '../todos-list/TodosList'

const Main = ({ todos, changeStatusHandler, deleteTodo }) => {
   return (
      <>
         <hr />
         <main>
            <TodosList todos={todos} changeStatusHandler={changeStatusHandler} deleteTodo={deleteTodo}/>
         </main>
      </>

   )
}

export default Main