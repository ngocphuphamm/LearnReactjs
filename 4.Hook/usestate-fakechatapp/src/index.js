import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// fake comments
// function emitComment(id)
// {
//   // custom event tự phát event tùy ý 
//   // 2 giây phát ra event 
//   // CustomEvent là một hàm 
//   setInterval(()=>{
//     // tự phát event
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`,{
//         detail : `Nội dung comment của lesson ${id}`
//       })
//     )
//   },2000)
// }



function emitComment(id){
  setInterval(()=>{
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,{
        detail : `Nội dung comment của lesson ${id}`
      })
    )
  },2000)
}
// phát event 
emitComment(1);
emitComment(2);
emitComment(3);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
