import './App.css';
import {useRef,useEffect} from 'react'
import Video from './Video'

// useImperativehandle (ref, function return object)
// dùng để bảo toàn dữ liệu bên trong các component khi mà dùng ref  tới
// component của nó thì khi ta dùng ref tham chiếu thẳng đến component của nó
// thì nó sẽ mất đi tính bảo mật dữ liệu vì hacker có thể thay đổi thuộc tính của dữ liệu bát cứ lúc nào 
// Thì với useImperativehandle nó chỉ cho ref vào các phương thức mà request đến component nhất định tránh hacker



function App() {
  // sử dụng ref để  có thực hiện function play và pause 
  // ref này  để tham chiếu qua component video 
  const videoRef =  useRef(); 
  

  useEffect(()=>{
    // hiển thi ref này hiện tại đang ở component nào 
    // console.log ra component bên video 
    console.log(videoRef);
  })

  // sử dụng function xử lý
  const handlePlay = ()=>{
    // current là 1 atribute trong ref vì ref sẽ quăng ra 1 đối tượng
    // play này gọi bên play video
    videoRef.current.play();
  }

  
  // sử dụng function xử lý
  const handleStop = ()=>{
    // current là 1 atribute trong ref vì ref sẽ quăng ra 1 đối tượng
    // pause này được gọi bên video 
    videoRef.current.pause();
  }

  return (
      <div>
        <Video  ref= {videoRef}/>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Pause</button>
      </div>
  );
}

export default App;
