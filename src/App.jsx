import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Nav from './pages/compononts/Nav'
import Serch from './pages/serch/Serch'
import Notification from './pages/notification/Notification'
import Following from './pages/profile/Following'
import Followers from './pages/profile/Followers'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notification' element={<Notification/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/serch' element={<Serch/>}/>
        </Routes>
    </>
  )
}

export default App
