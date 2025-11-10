import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './component/Login';

function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/mainlayout' element={<MainLayout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
