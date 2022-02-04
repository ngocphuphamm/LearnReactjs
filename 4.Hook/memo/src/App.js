import logo from './logo.svg';
import {useState,memo} from 'react'
import './App.css';
import Content from './Content';
// 1. menol) -> Higher Order Component (HOC)
// 2. useCallback()
// Hooks
// HOC
// Render props


// Memo : khi có một component có nhiều props cần render gây ảnh hưởng đến component
// Dùng memo cho các component con có các props đã render r không cần render lại 
function App() {
  
  const [count,setCount] = useState(0)
  
  const increase = ()=>{
    setCount(count +1 )
  }
  return (
    <div className="App">
          <Content />
          <h1>{count}</h1>
          <button onClick = {increase}>Click me</button>
    </div>
  );
}

export default App;
