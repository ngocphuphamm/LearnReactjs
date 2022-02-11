import { SET_TODO_INPUT } from "./constant";
import {ADD_TODO} from './constant';
// thực hiện action theo như app đã gọi 
export const setTodoInput = (payload) => (
  
    {
    // gọi type 
        type : SET_TODO_INPUT,
        payload 
}
)

export const addTodo = (payload)=>({
    type : ADD_TODO,
    payload
})