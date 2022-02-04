import logo from './logo.svg';
import Content from './Content';
import { useState,memo,useCallback} from 'react';
import './App.css';
// 1. memo(0 > Higher Order Component (HOC)
// 2. useCallback(CALLBACK,DEPENDENCY)
// NHẬN CALL BACK TẠO  RA HÀM ĐÃ CALL BACK LƯU RA NGOÀI THAM CHIẾU SAU ĐO RETURN LẠI 
// NẾU MÀ DEPENDENCY [] TRẢ LẠI THAM CHIẾU TRƯỚC ĐÓ THAY VÌ NÓ LẤY THẰNG MỚI MÀ TRỐNG GIỐNG TỰA MEMO NẾU KO CÓ SỰ THAY ĐỔI CALLBACK
// NẾU MÀ GẮN DEPENDENCY[VALUE] LÀ CÓ KHẢ NĂNG SẼ THAY ĐỔI CALLBACK render tạo ra callback mới 
// CÓ MEMO THÌ MỚI CÓ CALLBACK 
// 11- Reference types
// Il - React memo ()
function App() {
  const [count,setCount] = useState(0);

  const handleClick = useCallback(()=>{
    return setCount((prevCount)=>{
      return prevCount + 1;
    } )
  },[])
  return (
    <div className="App">
            <Content onIncrease = {handleClick}/>
        <h1>{count}</h1>
     
    </div>
  );
}

export default App;
