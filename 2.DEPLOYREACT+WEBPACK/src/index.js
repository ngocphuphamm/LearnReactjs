import React from  "react"
import ReactDOM from "react-dom"

// tạo component App 
function App() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))