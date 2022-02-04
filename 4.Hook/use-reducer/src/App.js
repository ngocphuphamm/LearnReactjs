import logo from './logo.svg';
import './App.css';
import{useState,useReducer} from 'react'
// useReducer áp dụng case  phức tạp h

// useState
// 1. Init state: 0
// 2. Actions: Up (state+ 1) / Down (state - 1)


// useReducer
// 1. Init state: 8
// 2. Actions: Up (state + 1)/ Down (state y 1)
// 3. Reducer
// 4. Dispatch

// DEPLOY

//INIT STATE 
const initState = 0 ; 


// ACTION 
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer(state,action)
// tham số nhận cái state hiện tại và cái hành động 
const reducer = (state,action)=>{
  console.log("reducer running ...... ")
  switch(action){
    case UP_ACTION : return state +1 ;
    case DOWN_ACTION : return state -1 ;
    default : throw new Error('Action không hợp lệ');
  }
}

// dispatch 
// useReducer (reducer,initState)
// initState khởi tạo ra 1 array  
// reducer khởi tạo  một hàm function 
function App() {
  //dispatch là hàm 
  const [count,dispatch] = useReducer(reducer,initState);
  // initState = count 
  //dispatch  = reducer
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
      <button
      onClick={()=>dispatch(DOWN_ACTION)}>DOWN</button>
      <button onClick={()=>dispatch(UP_ACTION)}>UP</button>
      </div>
    </div>
  );
}

export default App;
