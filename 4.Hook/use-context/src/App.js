import "./App.css";
import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./Theme";
// Khi mà ta truyển dữ liệu qua  các  file một cách tay thì  trong lúc truyền dữ liệu đến
// các component cần tới dữ liệu đó thì có những component trung gian ko xài đến nó mà vẫn phải
//  gán vào để truyển dữ liệu qua component khác  đ mà mất thì dữ liệu truyền qua mất hết

//     RỦI RO : khi mà truyền như v chỉ cần component trung gian mà bị lỗi
//     thì ta không truyền dữ liệu đến những component khác được vì thế chúng ta
//     sẽ sử dụng USE-CONTEXT và giảm đi thao thác

// // USE CONTEXT
// 1.Create context
// 2. Provider (gửi dữ liệu)
// 3. Consumer (nhận dữ liệu)

function App() {
  const Context = useContext(ThemeContext);
  return (

      <div className="App">
        <button onClick = {Context.handleClick}>Ấn vào đây đổi màu </button>
        <Content />
      </div>
  
  );
}

export default App;
