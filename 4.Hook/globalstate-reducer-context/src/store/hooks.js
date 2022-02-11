import {useContext} from 'react';
import Context from './Context';

//  hook thay vì trong app.js 
// const [state,dispatch] = useContext(StoreContext);
// console.log(state) 

// thì ta CUSTOM NHƯ SAU 

export const useStore = () =>{
    // dùng Context để lấy properties bên trong component provider
    const [state,dispatch] = useContext(Context);

    // return lại value 
    return [state,dispatch]
}