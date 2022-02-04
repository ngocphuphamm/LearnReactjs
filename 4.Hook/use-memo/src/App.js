import logo from './logo.svg';
import './App.css';
import {useState,useMemo,useRef} from 'react';

// useMemo (CALLBACK,[]) tránh lặp lại trong function logic phức tạp 
// để dependency thì nó chỉ tính toán 1 lần thôi sau đó
// trả về kết quả tính toán từ lần trước 

function App() {

  const nameRef = useRef()

  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [products,setProducts] = useState([]);
  const handleClick = ()=>{
    setProducts([...products,{
      name,
      price : parseInt(price)
    }])
    
    setName('');
    setPrice('');


    nameRef.current.focus()
  }
  const total = 
  useMemo(()=>{
    const result = products.reduce((result,el)=>{
      console.log("tính toán lại")
      return  result + el.price
   },0)
   return result
  },[products])


  return (
    <div className="App">
        <input value={name} 
        ref = {nameRef}
        placeholder="Entername"
        onChange={e=> setName(e.target.value)} />
        <br/>
        <input value={price} placeholder = "Enter price"
        onChange={e=> setPrice(e.target.value)}
        />
        <br/>
        <button onClick = {handleClick}>Add</button>
         <br/>
        Total: {total}

        <ul>
          {products.map((el,index)=>(
            <li key={index}>{el.name}, {el.price}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
