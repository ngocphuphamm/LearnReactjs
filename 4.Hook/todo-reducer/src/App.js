import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
// use Reducer 
// 1. Init state
// khai báo các dạng atribute như usestate ban đầu tham số truyền vào useState(tham số );
 const initState = {
      job:'',
      jobs:[]
 }
 
 // 2. Action 
 // action này là tên loại để có gì set action gọi nó sẽ dữa trên type action này 
 const type_set_value = 'type_set_value' ; 
 const type_add_value = 'type_add_value';
 const type_remove_value = 'type_remove_value';


 // set action như useState 
// hàm set action này chủ yếu là để set các loại chức năng 
// mình muốn làm và set tham sô dữ liệu vào để tiến hành vào reducer 
 // set action job
const action_set_Job = (payload) => { 
   return { 
      type  :  type_set_value,   
      payload
   }
 }

 // add action job 
 const action_add_job = (payload)=>{ 
   console.log("đã vào")
    return { 
      type : type_add_value,
      payload
    }
 }

 // action remove 
 const action_remove_job = (payload)=>{ 
   console.log(payload)
   return {
     type : type_remove_value,
     payload
   }
 }


// 3. Reducer 
// hàm xử lý dữ liệu
const reducer = (state,action) =>{
  console.log(action)
  const a = 1 ;
  let newState ; 
  switch (action.type) {
    case type_set_value :
      newState = { 
        // set dữ liệu của những ký tự trước đó 
        ...state , 
        job : action.payload 
      }
      break ; 
     
    case type_add_value : 
      return {
        // bảo lưu dữ liệu cũ để có gì sử dụng
        ...state,
         // gắn nó vào jobs
        jobs : [...state.jobs,action.payload]
      }
      break;
    case type_remove_value : 
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload,1);
      
   console.log(...state); return { 
        // bảo lưu dữ liệu cũ để có gì sử dụng
        // state hiện tại
        ...state,
        // state update
        jobs : newJobs
    }
    break; 
      default : throw new Error("đã xuất hiện lỗi")
    }
    
  return newState ;
};

// state  = set , delete  , add 
function App() {  
  const [state,dispatch] =  useReducer(reducer ,initState);
  // job và job để có thể có value trong state 
  const {job  , jobs } = state ; 
 

  // submit 
  const handleClick = ()=>{
    // khi dùng use reducer phải dùng dispatch để nó xuất ra sử dùng phương thức reduc
     dispatch(action_add_job(job))
  }

  // remove  
  const handleRemove = (index)=>{
    dispatch(action_remove_job(index))
  }
  return (
    <div className="App">
      <h1>To do list</h1>

      <input
      value = {job}
      onChange = {(e)=>{
        dispatch(action_set_Job(e.target.value))
      }}
       placeholder = "Điền vào chỗ trống"
      />

     <button onClick ={handleClick}>Add</button> 

     <ul>
        {jobs.map((el,index)=>(
          <li   key = {index}>{el}  <br/>
           <span style = {{color : "red"}} 
           onClick = {(e)=>{handleRemove(index)}}>xóa</span>
          </li>
  
        ))}   
        
     </ul>
     
    </div>
  );
}

export default App;
