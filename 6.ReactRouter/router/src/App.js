import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
  return (
    <div className="App">
        <nav>
          <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/news">News</a>
            </li>
            <li>
                <a href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/news" element = {<NewsPage/>} />
            <Route path="/Contact" element = {<ContactPage/>} />
        </Routes>
       

    </div>
  );
}

export default App;
