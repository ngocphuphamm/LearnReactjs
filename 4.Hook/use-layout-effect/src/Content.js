import {useState,useEffect,useLayoutEffect} from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nėu deps thay đói
// 5. Gọi useEffect caL lback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gại cleanup nều deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

function Content() {
    const [count,setCount] = useState(0)
    useLayoutEffect(()=>{
        if(count > 3 )
        {
            setCount(0);
        }
    },[count])
    const handleClick  = () => {
        setCount(count + 1 )
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick = {handleClick}>Click </button>
    </div>
  );
}
export default Content;
