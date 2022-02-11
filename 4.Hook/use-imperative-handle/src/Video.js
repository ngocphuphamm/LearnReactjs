import video1 from  './video/video1.mp4'
import {forwardRef,useImperativeHandle,useRef} from 'react'

// forward ref  để sử dụng ref trong component 
// để lấy được ref thông qua forward ref
// thì function nameFunction (props, ref)
function Video(props,ref){
    const videoRef = useRef()
    // nên dùng useimper để có tính đóng gói 
    // cái callback được gọi ref ở component app bên app và ta truyền tham chiếu 
    // videoRef của component hiện tại vào thông qua như midleware v
    // open ra ngoài 2 method 
    useImperativeHandle(ref,()=>(
        {
        // hàm phương thức thực hiện 
        play() {
                videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
        }
    ))
    return (
        <video 
           
            // ref mới trong videoref
            ref = {videoRef}
            src  ={video1}
            width = "400px"
        />

        
    )
}
// nhận ref 
export default forwardRef(Video) ; 