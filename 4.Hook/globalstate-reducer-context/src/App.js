
import './App.css';
// lấy use store hook đã custom
 import { useStore,actions } from './store'
 
function App() {
  const [state,dispatch] = useStore();
  console.log(state.todoInput);
  const handleClick = ()=>{
      dispatch(actions.addTodo(state.todoInput))
  }
  return (
    <div className="App">
       <input
       // state chứa giá trị initstate bên trong các bước cơ bản của reducer initState
       value = {state.todoInput}
       placeholder = "Mời bạn nhập"
       // thực hiện action qua file action đcọ tiếp
       onChange = {(e)=>{
         dispatch(actions.setTodoInput(e.target.value))
  
       }}
       ></input>

       <button onClick={handleClick}>Add</button>


      <br/>
       <div>
       <ul>
        {
          state.todo.map((el,index)=>(
              <li key={index}>{el}</li>
          ))

        }
      </ul>
       </div>
     
    </div>
  );
}

export default App;
