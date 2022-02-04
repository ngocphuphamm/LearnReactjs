import { useState } from "react";
import { useEffect } from "react";
const lessons = [
    {
        id : 1 , 
        name : "Hoc react js "
    }
    , 
    {
        id:2 ,
        name : "Hoc java"
    },
    {
        id : 3 , 
        name : "Arrow function"
    }
]
function Content ()
{
    const [lessonId, setLessonId] = useState(1)
 
 // lắng nghe sự kiện dom event ()
 useEffect(()=>
 {
     const handleComment =({detail}) => {
        console.log(detail)
     }
     // lắng nghe sự kiện event bên index.js 
     window.addEventListener(`lesson-${lessonId}`,handleComment)
     
     //clean up
     return ()=>{ window.removeEventListener(`lesson-${lessonId}`,handleComment) }
    },[lessonId])


    return (
        <div>
            <ul>
                {lessons.map(el => (
                    <li key={el.id} 
                        style = {{
                            color : lessonId === el.id ? "red" : "black"
                        }}
                       onClick = {()=> setLessonId(el.id)} >{el.name}</li>
                ))}           
            </ul>
        </div>
    )
}
export default Content;