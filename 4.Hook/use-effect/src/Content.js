
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


 ///----------------------------------------------------------------
 // 1.Callback luôn được gọi sau khi component mounted
 // 2.Cleanup function luôn được gọi trước khi component unmounted
 // 3.Cleanup function luôn được gọi                 trước khi callback được gọi (trừ lần mounted)
const tab = ['posts','comments','albums']
function Content()
{
    // hiển thi title trên thanh web
    const [title,setTitle] = useState("")
    // hiển thị dữ liệu trên call api 
    const [posts,setPosts] = useState([]);
    // hiển thị loại dữ liệu được call api
    const [type,setType] = useState("posts");
    // hiển thị nút button ghi scoll thanh xuống 
    const[showGotoTop,setShowGotoTop] = useState(false)
    //  đếm ngược
    const [countdown,setCountdown] = useState(180)
    // hiển thi sự kiện để bắt lên  title
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
    // scroll
    useEffect(()=>{
        const handleScroll = () => {
            //khoảng cách cuộn xuống dưới bao nhiêu pixel 
           if(window.scrollY >= 200)
           {
               // show 
               setShowGotoTop(true)
                console.log("set state")
           }
           else
           {
               //hide
               setShowGotoTop(false)
           }
           console.log("render")
           // cách viết nâng cao ch
        //    setShowGotoTop(window.scrollY >= 200)
        }
        // dùng effect dạng 2 
        // add event listener 
        window.addEventListener ("scroll",handleScroll)
        console.log("addEventListener");
        // Cleanup function
        return()=>{
            window.removeEventListener ("scroll",handleScroll)
            console.log("removeEventListener");
        }
    
    })
    /// RESIZE
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const changeSize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize",changeSize)
        return (()=>{
            window.removeEventListener("resize",changeSize)
        })
    })

    useEffect(()=>{
       const timerID =  setInterval(()=>{
            setCountdown((prevData)=>{
              return  prevData -1 ; 
             })
            console.log(countdown);
        },1000)
        return ()=> { clearInterval(timerID)}
    },[])
  
    return (
        <div>
        <h1>Đếm ngược {countdown}</h1>

            <h1>{width}</h1>

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