
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/home/HomePage';
import Register from './components/register/Register';
import Login from './components/login/Login';
import { useState } from 'react';




function App() {
  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={user && user._id ? <HomePage setLoginUser={setLoginUser} user={user} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
