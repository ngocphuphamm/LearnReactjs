import logo from './logo.svg';
import { useEffect, useRef, useState} from 'react';

import './App.css';

// Lưu các giá trị qua một tham chiếu bên ngoài 
// function components
// useRef luôn trả về 1 object
//useRef(intial vakue)

// khi ấn vào giảm thời gian  thì khi stop ta khong stop duoc 
// giá trị của setinterval nó chỉ áp dụng đúng 1 lần khi chưa render 
// đã render r thì giá trí ở một vùng nhớ khác nên xác định được 
// ta dùng useRef áp dụng cho các vùng nhớ sau 
let timerId  
function App() {
  const timerId = useRef();
  const prevData = useRef();
  console.log(timerId.current); 
 ;
  const [count,setCount] = useState(60)
  
  useEffect(()=>{
    prevData.current = count

  },[count])

  const handleStart = ()=>{
    console.log("start")
    timerId.current = setInterval(()=>{

      setCount((prevCount)=>prevCount-1)
      },1000)


  }
  
  const handleStop = ()=>{
    console.log("STOP")
    clearInterval(timerId.current)

  }

  // console.log(count,prevData.current);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
