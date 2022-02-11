import { SET_TODO_INPUT,ADD_TODO} from "./constant" 

const initState = {
    todo : [],
    todoInput : '',
}

function reducer(state,action){

    // bắt sự kiện của action
    switch(action.type)
    {
        case SET_TODO_INPUT : 
            return {
                ...state,
                todoInput : action.payload,
            }
            break;

        case ADD_TODO: 
            return {
                ...state,
                todo : [...state.todo,action.payload]
            }
        default : throw new Error("lỗi r ")
    }
    return state
}

export  default reducer
export {initState}