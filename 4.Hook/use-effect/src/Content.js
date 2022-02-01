
import { useEffect } from "react";
import { useState } from "react";
// Call back luôn được gọi sau khi component mounted 

 /*1.useEffect(callback)
 -Gọi callback mỗi khi component re-render the 
 - Gọi callback sau khi component thêm element vào DOM 
 2.useEffect(callback,[])
 3.useEffect(callback,[dependency])*/

function Content()
{
    const [title,setTitle] = useState("")
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        document.title = title
        console.log("Re-render",title)
    })
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then((data)=>
        {
           setData(data);
        })
    })


    return (
        <div>
        <input value = {title}
             
            onChange = { e => setTitle(e.target.value)}/>
    {    console.log("render")}
        
        <ul>
          
                {data.map((el)=> (
                    <li key={el.id}>
                        {el.title}
                    </li>
                ))}
      
        </ul>
        </div>
    ) 
   
  

}
export  default Content; 