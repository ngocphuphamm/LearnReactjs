import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const gifts= ["Xe hơi","Iphone","Airblade"]; 

const courses = [
  {
    id : 1 , 
    name : "HTML,CSS"
  },
  {
    id : 2 , 
    name : "JAVA"
  },
  {
    id : 3, 
    name : "Javascript"
  }
]


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

// vd 1
/*
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const changeName = (e)=>
{
  setName(e.target.value);
}   

const changeEmail = (e)=>
{
  setEmail(e.target.value);
}

const handleSubmit = ()=>
{
  // call api 
  console.log({
    name,
    email
  })
}


console.log(name);
return ( 
     <div>
        <input value = {name} type="text" onChange={changeName}></input>
        <input value = {email} type="text" onChange={changeEmail}></input>
        <button onClick={handleSubmit}>Register</button>
     </div>
  
   )*/

   /////////////////////// VD 2 RADIO ////////////////
   //// radio ///
  /*const [checked,setChecked] = useState(2);

  console.log(checked);
  const handleSubmit = ()=>
   {
      console.log({id:checked})
   }
   
   

   return ( 
        <div >
          {courses.map((el)=> 
          (
              <div key = {el.id}>
                <input 
                checked = {checked === el.id}
                 type ="radio" onChange={()=> {setChecked(el.id)}} />{el.name}
              </div>
          ))}
           <button onClick={handleSubmit}>Register</button>
        </div>
     
      )*/

  ///////////////////////////VD3 CHECKBOX/./////////////
    // //// radio ///
    // const [checked,setChecked] = useState([]);

    // console.log(checked);
    // const handleCheck = (id)=>
    // {
    //     setChecked((prevData)=>
    //     {
    //       // kiểm tra nó check hay chưa 
    //       const isChecked = checked.includes(id)
    //       if(isChecked)
    //       {
    //         // gọi filter lọc bỏ cái index mình muốn bỏ 
    //         // return lại các thằng mà ko duoc lựa chọn mà không được lựa chọn ở đây là các 
    //         // mảng được lựa chọn do ta chọn index thì t muốn loại bỏ nó r 

    //         return checked.filter((item)=> item !== id)
    //       }
    //       else
    //       {
    //         //checked
    //         return  [
    //           ...prevData,
    //           id
    //         ]
    //       }
       
    //     })
    
    // }
    // const handleSubmit = ()=>
    //  {
    //     console.log({id:checked})
    //  }
     
     
  
    //  return ( 
    //       <div >
    //         {courses.map((el)=> 
    //         (
    //             <div key = {el.id}>
    //               <input 
    //               checked = {checked.includes(el.id)}
    //                type ="checkbox" onChange={()=>handleCheck(el.id)} />{el.name}
    //             </div>
    //         ))}
    //          <button onClick={handleSubmit}>Register</button>
    //       </div>
       
    //     )
   
}

export default App;
