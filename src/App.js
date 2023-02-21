import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Index1 from './Index1';
import { userContext } from './Context';
import {useState} from 'react';


function App() {

  const[user,setUser]=useState("Celine");
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/Index1'>Index1</Link>
          </li>
        </ul>
      
      
      </nav>
      <userContext.Provider value={{user,setUser}}>
      <Routes>
       
       <Route path='/'element={<Home/>}/>
        <Route path='/Index1'element={<Index1/>}/>
       
        </Routes>
        </userContext.Provider>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
