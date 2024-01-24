import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Pages/MainPage'
import MainPage from './Pages/MainPage'
import Descripcion from './Pages/Descripcion'
import Espacios from './Pages/Espacios'
import Contacto from './Pages/Contacto'
import MenuLateral from './Components/MenuLateral'
import Header from './Pages/Header'

function App() {

  return (
    <>
        <Header/>
        <MainPage/>
        <Descripcion/>
        <Espacios/>
        <Contacto/>
        <MenuLateral/>
    </>
  )
}

export default App
