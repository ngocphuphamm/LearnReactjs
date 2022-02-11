import Context from './Context';
// sử dụng reducer vì có nhiều state  dễ quản lý state thay vì useState
import { useReducer  } from 'react';
// import các bước để tạo nên use reducer
import reducer,{initState}  from './reducer';
import logger from './logger'
function Provider({children}){
    // state chứa giá trị của init state
    // khởi tạo useReducer
    const[state,dispatch] = useReducer(logger(reducer),initState);
    return (
            <Context.Provider value ={[state,dispatch]}>
                {children}
            </Context.Provider>
    )
}
export default Provider;