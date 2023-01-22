import './App.css';
import  AboutUs  from './components/AboutUs'
import  Home  from './components/Home'
import  Menu  from './components/Menu'  
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
  <div className="bob " >
    <nav className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <ul>
        <li className='space-x-5 text-center   '> 
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About us</Link>
          <Link to="/Menu">Menu</Link>
        </li>
      </ul>
    </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="Menu" element={<Menu />} />
    <Route path="*" element={<home />} />
   </Routes>
  </div>
  );
}

export default App;