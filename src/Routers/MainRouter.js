import React from 'react'
import { Route,Router,Routes } from 'react-router-dom' 
import Home from '../Components/Home/Home'
import Login from '../Pages/Login'
function MainRouter() {
  return (
    <div>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/' element={<Login/>}/>
            </Routes>
    </div>
  )
}

export default MainRouter