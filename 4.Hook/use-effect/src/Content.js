
import { useEffect } from "react";
import { useState } from "react";


/////////////////// Call API ////////////////
// Call back luôn được gọi sau khi component mounted 

 /*1.useEffect(callback)
 -Gọi callback mỗi khi component re-render the 
 - Gọi callback sau khi component thêm element vào DOM 
 2.useEffect(callback,[])
 // Chỉ gọi call back 1 lần sau khi component mouted 
 3.useEffect(callback,[dependency])
 // callback sẽ được gọi lại khi dependency thay đởi 
 */


 ///////////// LISTTEN DOM EVENT////////////////
 // Scroll lắng nghe cuộn trang 
 // Resize 

const tab = ['posts','comments','albums']
function Content()
{
    const [title,setTitle] = useState("")
    const [posts,setPosts] = useState([]);
    const [type,setType] = useState("posts");
    const[showGotoTop,setShowGotoTop] = useState(false)
    console.log(type)
    useEffect(()=>
    {
        document.title = title
     
    })
    // call api đặt dữ liệu vào 
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then( res => res.json())
        .then((data)=>
        {
           setPosts(data);
        })
    },[type])

    useEffect(()=>{
        const handleScroll = () => {
            //khoảng cách cuộn xuống dưới bao nhiêu pixel 
           if(window.scrollY >= 200)
           {
               // show 
               setShowGotoTop(true)
           }
           else
           {
               //hide
               setShowGotoTop(false)
           }
        }
        // dùng effect dạng 2 
        // add event listener 
        window.addEventListener ("scroll",handleScroll)
    })
 
    return (
        <div>

            {tab.map((el)=> 
              (<button
              style = {type === el ? {
                  color : "red",
                  backgroundColor : "blue" 
              } : {} }
                key ={el}
                onClick={()=> setType(el)}>
                {el}
                </button>)
            )}
        <input value = {title}
             
            onChange = { e => setTitle(e.target.value)}/>
   
        
        <ul>
          
                {posts.map((el)=> (
                    <li key={el.id}>
                        {el.title || el.name}
                    </li>
                ))}
                
                {showGotoTop && 
                <button style = {{
                    position: 'fixed',
                    right : 10 ,
                    bottom : 20 
                }}>Go to show top </button>}
        </ul>
  
    //     </div>
    ) 
   
}
export  default Content; 