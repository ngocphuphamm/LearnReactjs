import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { useEffect } from "react";
import { useState } from "react";


function App() {
 
  const [show,setShow] = useState(false);
  const handleToogle = () => {
    setShow(!show)
  }
  return (
    <div className="App">
      
        <button onClick={handleToogle}>Toogle</button>
        {show && <Content/>}
        
    </div>
  );
}

export default App;
