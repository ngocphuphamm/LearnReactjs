import { useState } from 'react';
import './App.css';

function App() {

  // const storageJobs = JSON.parse(localStorage.getItem("jobs"));
  // // nếu mà storageJob là null hay undefined thì dùng toán tử cho nó là mảng rổng 
  // const  [jobs,setJobs] = useState(storageJobs ?? [] );

  // làm cách loại bỏ khúc get item  thừa 
  const [jobs,setJobs] = useState(()=>{ 
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    return storageJobs
  })
  const [job,setJob] = useState("");
  const handleClick = ()=>{
    setJobs((prevData)=>{
      const newJobs= [...prevData,job]
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs',jsonJobs);
      return newJobs

    })
    setJob("");
  }
  console.log(jobs)
  return (
    <div className="App">
        <input
        value = {job}
        onChange = {(ev)=>{setJob(ev.target.value)}}
        />
        <button onClick = {handleClick}>Add</button>

        <ul>
          {
            
          jobs.map((el,index)=>
          (
            <div key={index}>
                <li>{el}</li>
            </div>
          ))}
        </ul>
    </div>
  );
}

export default App;
