import Context from '/Context'
// sử dụng reducer vì có nhiều state  dễ quản lý state thay vì useState
import { useReducer  } from 'react';
// import các bước để tạo nên use reducer
import reducer,{initState}  from './reducer';

function Provider({children}){
    // khởi tạo useReducer
    const[state,dispatch] = useReducer(reducer,initState);
    return (
            <Context.Provider value ={[state,dispatch]}>
                {children}
            </Context.Provider>
    )
}
export default Provider;