import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/todosTypes"


export const addTodo = (text) => {
   return {
      type: ADD_TODO,
      payload: {
         id: Date.now().toString(36),
         text,
         complited: false
      }
   }
}

export const deleteTodo = (id) => {
   return {
      type: DELETE_TODO,
      payload: id
   }
}

export const changeStatus = (id) => {
   return {
      type: CHANGE_STATUS,
      payload: id
   }
}

