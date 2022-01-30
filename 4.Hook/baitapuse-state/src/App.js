import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const gifts= ["Xe hơi","Iphone","Airblade"]; 



function App() {
  //////////////Tạo vòng quay /////////////
//   const handleClick = ()=> {
//       setGift((prevData)=>
//       {
//         const number = Math.floor(Math.random()*3);
//         return gifts[number];
//       })
//   }
//   const [gift,setGift]  = useState();
//  // nếu mà có gift thì hiển thị  gift nếu không có gift thì hiển thị chưa có phần thuổng 
//   return (
//     <div className="App">
      
//       <h1>{gift || "chưa có phần  thưởng"}</h1> 
//       <button onClick={handleClick}>Lấy thưởng</button>    
//     </div>
//   );



///////////////Two binding và Onebinding ///////////////
const [name,setName] = useState("");
const changeName = (e)=>
{
  setName(e.target.value);
}   
const  changeClick = () => 
{
  setName("Ngọc Phú")
  console.log(name)
}
console.log(name);
return ( 
     <div>
        <input value = {name} type="text" onChange={changeName}></input>
        <button onClick = {changeClick}>Change</button>
     </div>
  
   )
}

export default App;
