import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/todosTypes";


const todosReducer = (state = [], action) => {
   switch (action.type) {

      case ADD_TODO:
         return [
            ...state,
            action.payload
         ]

      case DELETE_TODO:
         return state.filter(todo => todo.id !== action.payload) // возвращается новый массив

      case CHANGE_STATUS:
         return state.map(todo => {
            if (todo.id === action.payload) {
               return {
                  ...todo,
                  complited: !todo.complited
               }
            } else {
               return todo
            }
         })

      default:
         return state
   }
}

export default todosReducer