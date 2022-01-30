import {useState} from "react"
import './App.css';

const orders = [100,200,300];
function App() {
  // const total=  orders.reduce((total,el)=> total + el)
  // console.log(total)
  // const [counter,setCounter] = useState(total);

  // const handleIncrease = ()=> {
  //   setCounter(counter + 1 )
  //   // setCounter(prevState => {
  //   //   prevState + 1 
  //   // })
  // }

  // const handleDecrease = ()=> {
  //   if(counter > 0 )
  //   setCounter(counter - 1);
  //   else
  //   setCounter(counter)
  // }
  // return (
  //   <div className="App">
  //     <h1>{counter}</h1>
  //     <button onClick ={handleIncrease}>Increase</button> <br></br>
  //     <button onClick = {handleDecrease}>Decrease</button>
  //   </div>
  // );

  ////////////////////////////////////
  //  var data  = 
  //  {   name : "PHẠM ngọc Phú ",
  //   age : 18 ,
  //   address : "ahihi"}
  
  // const [info,setInfo] = useState(data)
  
  // const handleUpdate =  ()=> {
  //   setInfo({
  //     ...info,
  //     bio : "ahuhu"
  //   })
  // }

  // return (
  //   <div className="App">
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick ={handleUpdate}>Update </button> <br></br>

  //   </div>
  // );

  var data  = 
  {   name : "PHẠM ngọc Phú ",
   age : 18 ,
   address : "ahihi"}
   const [info,setInfo] = useState(data); 

  const handleClick = ()=> {
      setInfo(prevData=> {
      return {  ...prevData, 
         add : "hello"}
      })
  }

   return (
     <div className="App">
       <h1>
         {JSON.stringify(info)}
       </h1>
       <button onClick ={handleClick}></button>
     </div>
   )
}

export default App;
