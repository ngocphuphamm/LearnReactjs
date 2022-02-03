
import { useEffect } from "react";
import { useState } from "react";
function Content() {
  //////////////////////////// Click count đếm //////////////////////////////////  
  const [count,setCount] = useState(1);
  const handleClick =  ()=>
  {
    setCount(count+1);
  
  }
  console.log(count);
  useEffect(()=>
  {
    console.log("Mounted or Re-render" )
    return ()=>
    {
      console.log("clean up ")
    }
  },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{return handleClick()}}>Button</button>
    </div>
  );
  



  // hiển thị avartar
  const [avartar,setAvartar] = useState();

  useEffect(()=>{
    //clean up bộ nhớ 
    return ()=>{
      //XÓA BỘ NHỚ URL
      avartar && URL.revokeObjectURL(avartar.preview);
      console.log("đã clean  bộ nhớ ảnh trong ur l")
    }
  })
  const handlePreviewAvartar = (e)=>{
      const file = e.target.files[0];
      console.log(file)
      // tạo ra url   tạm lưu bộ nhớ vào trình duyệt 
      // đồng thời tạo thêm thuộc tính cho file
      file.preview =  URL.createObjectURL(file);
      console.log(URL.createObjectURL(file))
      // set dữ liệu vào avatart
      setAvartar(file);
      // reset target - null 
      e.target.value = null
    }
  return (
    <div>
    <input type="file"
  
      onChange= {handlePreviewAvartar} /> 
      {avartar && (<img src={avartar.preview} alt ="" width="60%"/> )}
    </div>
  )

  
}
export default Content;
